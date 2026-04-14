import os
import shutil
import uuid
import asyncio
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

# Import standard library vocal removal functions
# Adjust the import based on the actual module name where the functions reside.
import vocal_remover

app = FastAPI(title="Vocal Remover API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Directories for temp uploads and outputs
UPLOAD_DIR = "uploads"
OUTPUT_DIR = "output"

os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Serve the static output directory to allow downloading files
app.mount("/output", StaticFiles(directory=OUTPUT_DIR), name="output")

# Root route will be handled by the static files mount below

@app.post("/api/process")
async def process_audio(
    file: UploadFile = File(...),
    method: str = Form("ai")
):
    if not file.filename.lower().endswith(('.wav', '.mp3', '.flac', '.ogg', '.m4a')):
        raise HTTPException(status_code=400, detail="サポートされていないファイル形式です。")

    if method not in ["ai", "phase"]:
        raise HTTPException(status_code=400, detail="無効な処理方式です。")

    # Generate a unique task ID
    task_id = str(uuid.uuid4())
    _, ext = os.path.splitext(file.filename)
    input_filename = f"{task_id}{ext}"
    input_path = os.path.join(UPLOAD_DIR, input_filename)

    # Save the uploaded file
    with open(input_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Run processing based on method
    try:
        # Run in a separate thread to not block the async event loop
        if method == "phase":
            output_filename = f"{task_id}_instrumental.wav"
            output_path = os.path.join(OUTPUT_DIR, output_filename)
            await asyncio.to_thread(
                vocal_remover.remove_vocals_phase_cancellation, 
                input_path, 
                output_path
            )
            
            return {
                "status": "success",
                "method": "phase",
                "files": {
                    "instrumental": f"/output/{output_filename}"
                }
            }
            
        elif method == "ai":
            # For AI, Demucs creates a folder structure inside output_dir
            # For --two-stems vocals, the output is htdemucs/{input_filename_without_ext}/vocals.wav and no_vocals.wav
            await asyncio.to_thread(
                vocal_remover.remove_vocals_demucs, 
                input_path, 
                OUTPUT_DIR
            )
            
            # Demucs uses the basename of the input file
            folder_name = os.path.splitext(input_filename)[0]
            
            return {
                "status": "success",
                "method": "ai",
                "files": {
                    "instrumental": f"/output/htdemucs/{folder_name}/no_vocals.wav",
                    "vocals": f"/output/htdemucs/{folder_name}/vocals.wav"
                }
            }
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        # Optionally, we can clean up the input file if desired
        pass

# Serve all static files from root so launcher works
app.mount("/", StaticFiles(directory=".", html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    # 開発用サーバー起動
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)

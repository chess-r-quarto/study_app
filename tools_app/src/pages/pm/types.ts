// Data model for the Local PM Framework.
// Mirrors the schema of tools/prototype/pm2.html (schemaVersion "1.0") so that
// JSON files are interchangeable between the prototype and this app.

export const SCHEMA_VERSION = '1.0';

export type Attitude = 'supportive' | 'neutral' | 'cautious' | 'resistant';
export type Engagement = 'unaware' | 'resistant' | 'neutral' | 'supportive' | 'leading';

export interface Stakeholder {
  id: string;
  name: string;
  organization: string;
  role: string;
  attitude: Attitude;
  power: number; // 1-5
  interest: number; // 1-5
  currentEngagement: Engagement;
  desiredEngagement: Engagement;
  strategy: string;
  communicationMethod: string;
  communicationFrequency: string;
  notes: string;
}

export type TaskStatus = 'not_started' | 'in_progress' | 'review' | 'completed';
export type Priority = 'high' | 'medium' | 'low';

export interface TaskItem {
  id: string;
  name: string;
  description: string;
  owner: string;
  startDate: string;
  endDate: string;
  progress: number; // 0-100
  status: TaskStatus;
  priority: Priority;
}

export interface Milestone {
  id: string;
  name: string;
  date: string;
  status: 'pending' | 'achieved';
  description: string;
}

export type RiskStatus = 'open' | 'mitigated' | 'occurred' | 'closed';

export interface RiskItem {
  id: string;
  title: string;
  probability: number; // 1-5
  impact: number; // 1-5
  responseStrategy: string;
  owner: string;
  status: RiskStatus;
  dueDate?: string;
}

export type IssueSeverity = 'critical' | 'high' | 'medium' | 'low';
export type IssueStatus = 'open' | 'pending' | 'resolved';

export interface IssueItem {
  id: string;
  title: string;
  severity: IssueSeverity;
  owner: string;
  status: IssueStatus;
  dueDate: string;
  resolution: string;
}

export interface DecisionItem {
  id: string;
  date: string;
  topic: string;
  decision: string;
  decisionMaker: string;
  reason: string;
  impact: string;
}

export type DeliverableStatus = 'not_started' | 'drafting' | 'review' | 'accepted';

export interface DeliverableItem {
  id: string;
  name: string;
  description?: string;
  owner: string;
  dueDate: string;
  status: DeliverableStatus;
  acceptanceCriteria: string;
}

export type ClosureStatus = 'in_progress' | 'completed_success' | 'completed_partial' | 'cancelled';

export interface ProjectData {
  schemaVersion: string;
  metadata: {
    projectId: string;
    projectName: string;
    projectCode: string;
    organization: string;
    department: string;
    projectManager: string;
    createdAt: string;
    updatedAt: string;
    exportedAt: string | null;
  };
  charter: {
    background: string;
    purpose: string;
    objectives: string;
    scope: string;
    outOfScope: string;
    deliverables: string;
    successCriteria: string;
    assumptions: string;
    constraints: string;
    budget: string;
    authority: string;
    notes: string;
  };
  stakeholders: Stakeholder[];
  tasks: TaskItem[];
  milestones: Milestone[];
  risks: RiskItem[];
  issues: IssueItem[];
  decisions: DecisionItem[];
  deliverables: DeliverableItem[];
  closure: {
    completionDate: string;
    overallStatus: ClosureStatus;
    achievements: string;
    unachievedObjectives: string;
    issues: string;
    lessonsLearned: string;
    handover: string;
    futureActions: string;
    approval: string;
    notes: string;
  };
}

export interface TipEntry {
  title: string;
  pmbokTerm: string;
  explanation: string;
  practicalMeaning: string;
  example: string;
}

export interface Snapshot {
  snapshotId: string;
  createdAt: string;
  projectName: string;
  memo: string;
  projectData: ProjectData;
}

export type TabId =
  | 'overview'
  | 'charter'
  | 'stakeholders'
  | 'tasks'
  | 'risks'
  | 'decisions'
  | 'deliverables'
  | 'closure';

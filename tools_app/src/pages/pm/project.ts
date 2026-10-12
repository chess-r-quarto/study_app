// Project factory + normalization (legacy/partial data → current schema).
import { SCHEMA_VERSION } from './types';
import type {
  ProjectData,
  Stakeholder,
  TaskItem,
  RiskItem,
  IssueItem,
  DeliverableItem,
  Milestone,
  DecisionItem,
  ClosureStatus
} from './types';

export function createEmptyProject(): ProjectData {
  const now = new Date().toISOString();
  return {
    schemaVersion: SCHEMA_VERSION,
    metadata: {
      projectId: 'proj_' + Math.random().toString(36).slice(2, 11),
      projectName: '新規プロジェクト',
      projectCode: 'PRJ-' + new Date().getFullYear() + '-001',
      organization: '',
      department: '',
      projectManager: '',
      createdAt: now,
      updatedAt: now,
      exportedAt: null
    },
    charter: {
      background: '',
      purpose: '',
      objectives: '',
      scope: '',
      outOfScope: '',
      deliverables: '',
      successCriteria: '',
      assumptions: '',
      constraints: '',
      budget: '',
      authority: '',
      notes: ''
    },
    stakeholders: [],
    tasks: [],
    milestones: [],
    risks: [],
    issues: [],
    decisions: [],
    deliverables: [],
    closure: {
      completionDate: '',
      overallStatus: 'in_progress',
      achievements: '',
      unachievedObjectives: '',
      issues: '',
      lessonsLearned: '',
      handover: '',
      futureActions: '',
      approval: '',
      notes: ''
    }
  };
}

const pick = <T extends string>(v: unknown, allowed: readonly T[], fallback: T): T =>
  allowed.includes(v as T) ? (v as T) : fallback;

const clamp = (v: unknown, min: number, max: number, fallback: number) => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.max(min, Math.min(max, n)) : fallback;
};

const arr = <T>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

/**
 * Fills missing fields and maps enum values written by the earlier simplified
 * React version (e.g. `under_review`, issue `in_progress`, closure `completed`)
 * back to the prototype's schema. Unknown extra fields are preserved.
 */
export function normalizeProject(raw: any): ProjectData {
  const base = createEmptyProject();
  const p = raw && typeof raw === 'object' ? raw : {};

  const closureMap: Record<string, ClosureStatus> = {
    completed: 'completed_success',
    not_started: 'in_progress'
  };

  return {
    ...p,
    schemaVersion: SCHEMA_VERSION,
    metadata: { ...base.metadata, ...(p.metadata || {}) },
    charter: { ...base.charter, ...(p.charter || {}) },
    stakeholders: arr<any>(p.stakeholders).map((s): Stakeholder => ({
      ...s,
      id: String(s.id ?? 'sh_' + Math.random().toString(36).slice(2)),
      name: s.name ?? '',
      organization: s.organization ?? '',
      role: s.role ?? '',
      attitude: pick(s.attitude, ['supportive', 'neutral', 'cautious', 'resistant'] as const, 'neutral'),
      power: clamp(s.power, 1, 5, 3),
      interest: clamp(s.interest, 1, 5, 3),
      currentEngagement: pick(s.currentEngagement, ['unaware', 'resistant', 'neutral', 'supportive', 'leading'] as const, 'neutral'),
      desiredEngagement: pick(s.desiredEngagement, ['unaware', 'resistant', 'neutral', 'supportive', 'leading'] as const, 'neutral'),
      strategy: s.strategy ?? '',
      communicationMethod: s.communicationMethod ?? '',
      communicationFrequency: s.communicationFrequency ?? '',
      notes: s.notes ?? ''
    })),
    tasks: arr<any>(p.tasks).map((t): TaskItem => ({
      ...t,
      id: String(t.id ?? 'task_' + Math.random().toString(36).slice(2)),
      name: t.name ?? '',
      description: t.description ?? '',
      owner: t.owner ?? '',
      startDate: t.startDate ?? '',
      endDate: t.endDate ?? '',
      progress: clamp(t.progress, 0, 100, 0),
      status: pick(t.status, ['not_started', 'in_progress', 'review', 'completed'] as const, 'not_started'),
      priority: pick(t.priority, ['high', 'medium', 'low'] as const, 'medium')
    })),
    milestones: arr<any>(p.milestones).map((m): Milestone => ({
      ...m,
      id: String(m.id ?? 'ms_' + Math.random().toString(36).slice(2)),
      name: m.name ?? '',
      date: m.date ?? '',
      status: pick(m.status, ['pending', 'achieved'] as const, 'pending'),
      description: m.description ?? ''
    })),
    risks: arr<any>(p.risks).map((r): RiskItem => ({
      ...r,
      id: String(r.id ?? 'risk_' + Math.random().toString(36).slice(2)),
      title: r.title ?? '',
      probability: clamp(r.probability, 1, 5, 3),
      impact: clamp(r.impact, 1, 5, 3),
      responseStrategy: r.responseStrategy ?? '',
      owner: r.owner ?? '',
      status: pick(r.status, ['open', 'mitigated', 'occurred', 'closed'] as const, 'open'),
      dueDate: r.dueDate ?? ''
    })),
    issues: arr<any>(p.issues).map((i): IssueItem => ({
      ...i,
      id: String(i.id ?? 'issue_' + Math.random().toString(36).slice(2)),
      title: i.title ?? '',
      severity: pick(i.severity, ['critical', 'high', 'medium', 'low'] as const, 'medium'),
      owner: i.owner ?? '',
      status: i.status === 'in_progress' ? 'open' : pick(i.status, ['open', 'pending', 'resolved'] as const, 'open'),
      dueDate: i.dueDate ?? '',
      resolution: i.resolution ?? ''
    })),
    decisions: arr<any>(p.decisions).map((d): DecisionItem => ({
      ...d,
      id: String(d.id ?? 'dec_' + Math.random().toString(36).slice(2)),
      date: d.date ?? '',
      topic: d.topic ?? '',
      decision: d.decision ?? '',
      decisionMaker: d.decisionMaker ?? '',
      reason: d.reason ?? '',
      impact: d.impact ?? ''
    })),
    deliverables: arr<any>(p.deliverables).map((d): DeliverableItem => ({
      ...d,
      id: String(d.id ?? 'deliv_' + Math.random().toString(36).slice(2)),
      name: d.name ?? '',
      description: d.description ?? '',
      owner: d.owner ?? '',
      dueDate: d.dueDate ?? '',
      status: d.status === 'under_review' ? 'review' : pick(d.status, ['not_started', 'drafting', 'review', 'accepted'] as const, 'not_started'),
      acceptanceCriteria: d.acceptanceCriteria ?? ''
    })),
    closure: (() => {
      const c = { ...base.closure, ...(p.closure || {}) };
      c.overallStatus = closureMap[c.overallStatus as string] ??
        pick(c.overallStatus, ['in_progress', 'completed_success', 'completed_partial', 'cancelled'] as const, 'in_progress');
      return c;
    })()
  };
}

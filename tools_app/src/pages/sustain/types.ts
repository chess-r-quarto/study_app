export interface SdgItem {
  id: number;
  name: string;
}

export interface CausalRow {
  cause: string;
  polarity: '[+]' | '[-]';
  effect: string;
  isLeverage: boolean;
  note: string;
}

export interface ConceptState {
  name: string;
  org: string;
  challenge: string;
  stakeholders: string;
  solution: string;
  credibility: string;
  sdgs: number[];
  ask: string;
  timeline: string;
}

export interface FourPState {
  people: string;
  planet: string;
  profit: string;
  progress: string;
}

export interface AmbitionState {
  type: string;
  rationale: string;
}

export interface SystemState {
  causalRows: CausalRow[];
  hmw: {
    action: string;
    target: string;
    outcome: string;
  };
}

export interface VpsState {
  peopleValue: string;
  peopleKpi: string;
  planetValue: string;
  planetKpi: string;
  profitValue: string;
  profitKpi: string;
  progressValue: string;
  progressKpi: string;
  statement: string;
}

export interface TlbmcEconomic {
  partners: string;
  activities: string;
  resources: string;
  vp: string;
  rel: string;
  chan: string;
  seg: string;
  costs: string;
  rev: string;
}

export interface TlbmcEnvironmental {
  supplies: string;
  prod: string;
  materials: string;
  func: string;
  use: string;
  dist: string;
  eol: string;
  impacts: string;
  benefits: string;
}

export interface TlbmcSocial {
  comm: string;
  gov: string;
  emp: string;
  val: string;
  cult: string;
  scale: string;
  user: string;
  impacts: string;
  benefits: string;
}

export interface TlbmcState {
  economic: TlbmcEconomic;
  environmental: TlbmcEnvironmental;
  social: TlbmcSocial;
}

export interface SustainState {
  concept: ConceptState;
  fourP: FourPState;
  ambition: AmbitionState;
  system: SystemState;
  vps: VpsState;
  tlbmc: TlbmcState;
}

export type TabKey =
  | 'tab-overview'
  | 'tab-4p-ambition'
  | 'tab-system'
  | 'tab-vps'
  | 'tab-tlbmc'
  | 'tab-summary';

export type TlbmcLayer = 'layer-economic' | 'layer-environmental' | 'layer-social';

export type ThemeMode = 'dark' | 'light';

export interface ToastState {
  message: string;
  type: 'info' | 'success' | 'error';
}

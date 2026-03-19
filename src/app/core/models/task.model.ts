export interface Task {
  id: string;
  title: string;
  description?: string;
  dayOfWeek: number; // 0=lunes, 6=domingo
  weekStartDate: string; // ISO date del lunes
  time?: string; // HH:mm
  duration?: number; // minutos
  completed: boolean;
  category: string;
  color: string;
  isRecurring: boolean;
  order: number;
  reminder?: boolean;
}

export interface WeekTemplate {
  id: string;
  name: string;
  tasks: TemplateTask[];
}

export type TemplateTask = Omit<Task, 'id' | 'weekStartDate' | 'completed'>;

export const CATEGORIES: { name: string; color: string }[] = [
  { name: 'Feina', color: '#ec4899' },
  { name: 'Exercici', color: '#10b981' },
  { name: 'Estudi', color: '#f59e0b' },
  { name: 'Personal', color: '#ec4899' },
  { name: 'Llar', color: '#e879a0' },
  { name: 'Salut', color: '#ef4444' },
  { name: 'Oci', color: '#06b6d4' },
  { name: 'Altre', color: '#64748b' },
];

export const DAY_NAMES = ['Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte', 'Diumenge'];
export const DAY_NAMES_SHORT = ['Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds', 'Dg'];

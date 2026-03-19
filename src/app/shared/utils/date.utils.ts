/** Parse an ISO date string as local time (avoids UTC offset issues) */
export function parseLocalDate(isoDate: string): Date {
  const [y, m, d] = isoDate.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function getMonday(date: Date = new Date()): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function formatWeekStart(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

export function addWeeks(date: Date, weeks: number): Date {
  return addDays(date, weeks * 7);
}

export function getTodayDayOfWeek(): number {
  const day = new Date().getDay();
  return day === 0 ? 6 : day - 1;
}

export function formatDateShort(date: Date): string {
  return date.toLocaleDateString('ca', { day: 'numeric', month: 'short' });
}

export function formatWeekRange(mondayDate: Date): string {
  const sunday = addDays(mondayDate, 6);
  const fromDay = mondayDate.getDate();
  const toDay = sunday.getDate();
  const fromMonth = mondayDate.toLocaleDateString('ca', { month: 'short' });
  const toMonth = sunday.toLocaleDateString('ca', { month: 'short' });

  if (fromMonth === toMonth) {
    return `${fromDay} - ${toDay} ${fromMonth}`;
  }
  return `${fromDay} ${fromMonth} - ${toDay} ${toMonth}`;
}

export function isToday(weekStartDate: string, dayOfWeek: number): boolean {
  const monday = parseLocalDate(weekStartDate);
  const target = addDays(monday, dayOfWeek);
  const today = new Date();
  return (
    target.getDate() === today.getDate() &&
    target.getMonth() === today.getMonth() &&
    target.getFullYear() === today.getFullYear()
  );
}

export function isCurrentWeek(weekStartDate: string): boolean {
  return weekStartDate === formatWeekStart(getMonday());
}

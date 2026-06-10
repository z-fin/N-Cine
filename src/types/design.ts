export type AccentColor =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'indigo'
  | 'violet'
  | 'black';

export const accentVarByColor: Record<AccentColor, string> = {
  red: 'var(--color-red)',
  orange: 'var(--color-orange)',
  yellow: 'var(--color-yellow)',
  green: 'var(--color-green)',
  indigo: 'var(--color-indigo)',
  violet: 'var(--color-violet)',
  black: 'var(--color-black)',
};

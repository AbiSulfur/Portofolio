export const ease = {
  outExpo: [0.16, 1, 0.3, 1],
  inOutExpo: [0.76, 0, 0.24, 1],
} as const;

export const dur = {
  fast: 0.3,
  base: 0.6,
  slow: 1.0,
  hero: 1.2,
} as const;

export const stagger = {
  lines: 0.12,
  items: 0.08,
} as const;

export const viewport = {
  once: true,
  amount: 0.3,
} as const;

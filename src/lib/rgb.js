// ============================================================
// RGB COLOR SYSTEM — single source for the animated accent palette.
// Use these helpers for inline gradient styles so the palette
// never has to be hardcoded inside individual components.
// ============================================================

export const RGB_COLORS = [
  "#FF004C", // red
  "#FF00A8", // magenta
  "#8B00FF", // purple
  "#0066FF", // blue
  "#00D9FF", // cyan
  "#00FF9D", // green
  "#B6FF00", // lime
  "#FFD000", // yellow
  "#FF6A00", // orange
];

// Static linear gradient over the full palette.
// pass = index offset to give siblings a different starting point.
export const linearGradient = (angle = 115, offset = 0) => {
  const colors = [
    ...RGB_COLORS.slice(offset),
    ...RGB_COLORS.slice(0, offset),
    RGB_COLORS[offset],
  ];
  return `linear-gradient(${angle}deg, ${colors.join(", ")})`;
};

// Conic gradient for rotating rings / glows.
// `from` rotates the starting point so each ring differs slightly.
export const conicGradient = (from = 0, offset = 0) => {
  const colors = [
    ...RGB_COLORS.slice(offset),
    ...RGB_COLORS.slice(0, offset),
    RGB_COLORS[offset],
  ];
  return `conic-gradient(from ${from}deg, ${colors.join(", ")})`;
};

// Pick a single palette color (used rarely, e.g. focus states).
export const rgbColor = (index = 0) => RGB_COLORS[index % RGB_COLORS.length];
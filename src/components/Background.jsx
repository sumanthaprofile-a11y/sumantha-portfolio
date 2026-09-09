export default function Background() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-ink-950" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% -5%, rgba(56,189,248,0.10), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 35% at 85% 25%, rgba(56,189,248,0.05), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-grid" />
    </div>
  );
}
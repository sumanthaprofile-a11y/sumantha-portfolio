export default function Background() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-ink-950" />

      {/* ambient top glow (violet/cyan blend) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% -5%, rgba(139,0,255,0.10), transparent 65%), radial-gradient(ellipse 55% 35% at 80% -5%, rgba(0,217,255,0.06), transparent 65%)",
        }}
      />

      {/* ambient RGB blobs */}
      <div
        className="bg-blob left-[-10%] top-[8%] h-[36rem] w-[36rem]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,0,168,0.085), transparent 60%), radial-gradient(circle at 70% 70%, rgba(0,217,255,0.07), transparent 60%)",
          animation: "rgb-drift-a 28s ease-in-out infinite",
        }}
      />
      <div
        className="bg-blob right-[-12%] top-[42%] h-[32rem] w-[32rem]"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(139,0,255,0.08), transparent 60%), radial-gradient(circle at 65% 65%, rgba(0,255,157,0.06), transparent 60%)",
          animation: "rgb-drift-b 34s ease-in-out infinite",
        }}
      />
      <div
        className="bg-blob bottom-[-14%] left-[22%] h-[34rem] w-[34rem]"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(0,102,255,0.07), transparent 60%), radial-gradient(circle at 70% 70%, rgba(255,0,76,0.06), transparent 60%)",
          animation: "rgb-drift-c 30s ease-in-out infinite",
        }}
      />

      <div className="absolute inset-0 bg-grid" />
    </div>
  );
}
import { useState } from "react";
import { UserRound } from "lucide-react";
import { personal } from "../data/portfolio";

export default function ProfileImage({ className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={personal.imageAlt}
        className={`grid place-items-center overflow-hidden border border-dashed border-white/15 bg-ink-800 ${className}`}
      >
        <div className="flex flex-col items-center gap-3 text-center px-6">
          <span className="grid h-16 w-16 place-items-center rounded-full border border-white/15 bg-white/[0.04]">
            <UserRound className="h-7 w-7 text-zinc-500" strokeWidth={1.5} />
          </span>
          <span className="text-sm font-medium text-zinc-400">Add your photo</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={personal.image}
      alt={personal.imageAlt}
      loading="eager"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
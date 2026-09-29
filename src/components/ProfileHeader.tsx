import { BadgeCheck, Instagram } from "lucide-react";
import profileImg from "@/assets/photo_5287712544132895863_y.jpg";
import { profile } from "@/config/links";

export function ProfileHeader() {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="rise-in relative" style={{ animationDelay: "60ms" }}>
        <div className="glow-pulse rounded-full p-[3px]">
          <img
            src={profileImg}
            alt={`${profile.name} profile photo`}
            width={816}
            height={816}
            className="h-24 w-24 rounded-full object-cover ring-1 ring-primary/40 sm:h-28 sm:w-28"
          />
        </div>
      </div>

      <div className="rise-in mt-5 flex items-center justify-center gap-1.5" style={{ animationDelay: "160ms" }}>
        <h1 className="font-display text-2xl font-bold tracking-tight sm:text-[28px]">{profile.name}</h1>
        <BadgeCheck className="h-5 w-5 shrink-0 text-primary" aria-label="Verified" />
      </div>

      <p
        className="rise-in mt-1.5 text-[13px] font-medium uppercase tracking-[0.18em] text-primary/80"
        style={{ animationDelay: "230ms" }}
      >
        {profile.tagline}
      </p>

      <p className="rise-in mt-3 max-w-[22rem] text-sm text-muted-foreground" style={{ animationDelay: "300ms" }}>
        {profile.bio}
      </p>

      <span
        className="rise-in mt-4 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
        style={{ animationDelay: "360ms" }}
      >
        <Instagram className="h-3.5 w-3.5 text-primary" />
        {profile.instagram}
      </span>
    </header>
  );
}

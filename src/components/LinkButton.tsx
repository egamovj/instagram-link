import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  icon: ReactNode;
  label: string;
  hint?: string;
  trailing?: ReactNode;
  className?: string;
};

const baseClasses =
  "group flex w-full items-center gap-4 rounded-2xl border border-border glass-panel px-4 py-4 text-left transition-all duration-300 hover:border-primary/60 hover:shadow-[var(--glow-strong)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985] sm:px-5";

function Inner({ icon, label, hint, trailing }: BaseProps) {
  return (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-display text-[15px] font-semibold tracking-tight text-foreground sm:text-base">
          {label}
        </span>
        {hint ? (
          <span className="mt-0.5 block truncate text-xs text-muted-foreground">{hint}</span>
        ) : null}
      </span>
      <span className="shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-primary">
        {trailing}
      </span>
    </>
  );
}

export function LinkButtonAnchor(props: BaseProps & { href: string }) {
  const { href, className, ...rest } = props;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseClasses, className)}
      aria-label={props.label}
    >
      <Inner {...rest} icon={props.icon} label={props.label} />
    </a>
  );
}

export function LinkButtonAction(
  props: BaseProps & { onClick: () => void; expanded?: boolean; controls?: string },
) {
  const { onClick, expanded, controls, className, ...rest } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={expanded}
      aria-controls={controls}
      className={cn(baseClasses, expanded && "border-primary/60 shadow-[var(--glow-strong)]", className)}
    >
      <Inner {...rest} icon={props.icon} label={props.label} />
    </button>
  );
}

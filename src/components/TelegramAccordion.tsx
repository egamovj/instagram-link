import { useState } from "react";
import { ChevronDown, ExternalLink, Send, Users } from "lucide-react";
import { LinkButtonAction, LinkButtonAnchor } from "./LinkButton";
import { links } from "@/config/links";

export function TelegramAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <LinkButtonAction
        icon={<Send className="h-5 w-5" />}
        label="Telegram"
        hint="Channel & Group"
        expanded={open}
        controls="telegram-submenu"
        onClick={() => setOpen((v) => !v)}
        trailing={
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180 text-primary" : ""}`}
          />
        }
      />

      <div
        id="telegram-submenu"
        className={`grid transition-all duration-400 ease-out ${
          open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-3 pl-3 sm:pl-5">
            <LinkButtonAnchor
              href={links.telegramChannel}
              icon={<Send className="h-4.5 w-4.5" />}
              label="Telegram Channel"
              trailing={<ExternalLink className="h-4 w-4" />}
              className="py-3.5"
            />
            <LinkButtonAnchor
              href={links.telegramGroup}
              icon={<Users className="h-4.5 w-4.5" />}
              label="Telegram Group"
              trailing={<ExternalLink className="h-4 w-4" />}
              className="py-3.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

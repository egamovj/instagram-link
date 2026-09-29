import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, MessageCircle, Send, Briefcase } from "lucide-react";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ServicesAccordion } from "@/components/ServicesAccordion";
import { LinkButtonAnchor } from "@/components/LinkButton";
import { links } from "@/config/links";

const title = "Xolmurod | Official Links";
const description = "Official Telegram, YouTube and social links of Xolmurod.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="ambient-bg relative flex min-h-screen flex-col items-center justify-between overflow-hidden px-5 py-10 sm:py-14">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative w-full max-w-[480px]">
        <ProfileHeader />

        <nav className="mt-9 flex flex-col gap-3.5" aria-label="Social links">
          <div className="rise-in" style={{ animationDelay: "430ms" }}>
            <LinkButtonAnchor
              href={links.telegramChannel}
              icon={<Send className="h-5 w-5" />}
              label="Telegram Kanal"
              hint="Kanalga a'zo bo'lish"
              trailing={<ExternalLink className="h-4.5 w-4.5" />}
            />
          </div>

          <div className="rise-in" style={{ animationDelay: "510ms" }}>
            <LinkButtonAnchor
              href={links.projects}
              icon={<Briefcase className="h-5 w-5" />}
              label="Loyihalarim"
              hint="Barcha proyektlar"
              trailing={<ExternalLink className="h-4.5 w-4.5" />}
            />
          </div>

          <div className="rise-in" style={{ animationDelay: "590ms" }}>
            <ServicesAccordion />
          </div>

          <div className="rise-in" style={{ animationDelay: "670ms" }}>
            <LinkButtonAnchor
              href={links.admin}
              icon={<MessageCircle className="h-5 w-5" />}
              label="Telegram Lichka"
              hint="To'g'ridan-to'g'ri bog'lanish"
              trailing={<ExternalLink className="h-4.5 w-4.5" />}
            />
          </div>
        </nav>
      </div>

    </main>
  );
}

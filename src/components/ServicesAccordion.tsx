import { useState } from "react";
import { ChevronDown, Wrench, Globe, Bot, MonitorSmartphone, ShoppingCart, ExternalLink } from "lucide-react";
import { LinkButtonAction, LinkButtonAnchor } from "./LinkButton";
import { links } from "@/config/links";

export function ServicesAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <LinkButtonAction
        icon={<Wrench className="h-5 w-5" />}
        label="Mening xizmatlarim"
        hint="Men taklif qiladigan xizmatlar"
        expanded={open}
        controls="services-submenu"
        onClick={() => setOpen((v) => !v)}
        trailing={
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180 text-primary" : ""}`}
          />
        }
      />

      <div
        id="services-submenu"
        className={`grid transition-all duration-400 ease-out ${
          open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-3 pl-3 sm:pl-5 text-sm">
            <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-surface/50 p-4">
               <Globe className="h-5 w-5 text-primary" />
               <div>
                 <p className="font-semibold text-foreground">Veb-saytlar yaratish</p>
                 <p className="text-xs text-muted-foreground mt-0.5">Zamonaviy, tezkor va biznesingiz uchun moslashtirilgan veb-saytlar.</p>
               </div>
            </div>
            
            <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-surface/50 p-4">
               <Bot className="h-5 w-5 text-primary" />
               <div>
                 <p className="font-semibold text-foreground">Telegram botlar</p>
                 <p className="text-xs text-muted-foreground mt-0.5">Savdoni va mijozlar bilan ishlashni avtomatlashtiruvchi botlar.</p>
               </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-surface/50 p-4">
               <MonitorSmartphone className="h-5 w-5 text-primary" />
               <div>
                 <p className="font-semibold text-foreground">Mobil ilovalar</p>
                 <p className="text-xs text-muted-foreground mt-0.5">Android va iOS uchun sifatli va qulay dasturlar yaratish.</p>
               </div>
            </div>
            
            <div className="mt-1">
              <LinkButtonAnchor
                href={links.admin}
                icon={<ShoppingCart className="h-4.5 w-4.5" />}
                label="Xizmatlarga buyurtma"
                hint="Men bilan bog'lanish"
                trailing={<ExternalLink className="h-4.5 w-4.5" />}
                className="bg-primary/10 border-primary/20 hover:bg-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

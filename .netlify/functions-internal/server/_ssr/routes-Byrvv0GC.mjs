import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as MessageCircle, c as ExternalLink, d as Bot, f as BadgeCheck, i as MonitorSmartphone, l as ChevronDown, n as ShoppingCart, o as Instagram, r as Send, s as Globe, t as Wrench, u as Briefcase } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Byrvv0GC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var photo_5287712544132895863_y_default = "/assets/photo_5287712544132895863_y-DzsvSLfU.jpg";
var links = {
	telegramChannel: "https://t.me/RaqamliYechim",
	telegramGroup: "https://t.me/your_group",
	projects: "https://github.com/Xolmurod-dev",
	admin: "https://t.me/XolmurodErkinboyev"
};
var profile = {
	name: "Xolmurod",
	tagline: "Digital Creator • AI • Web",
	bio: "Barcha havolalarim shu yerda 👇",
	instagram: "@xolmurod"
};
function ProfileHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex flex-col items-center text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rise-in relative",
				style: { animationDelay: "60ms" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glow-pulse rounded-full p-[3px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo_5287712544132895863_y_default,
						alt: `${profile.name} profile photo`,
						width: 816,
						height: 816,
						className: "h-24 w-24 rounded-full object-cover ring-1 ring-primary/40 sm:h-28 sm:w-28"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rise-in mt-5 flex items-center justify-center gap-1.5",
				style: { animationDelay: "160ms" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold tracking-tight sm:text-[28px]",
					children: profile.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
					className: "h-5 w-5 shrink-0 text-primary",
					"aria-label": "Verified"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rise-in mt-1.5 text-[13px] font-medium uppercase tracking-[0.18em] text-primary/80",
				style: { animationDelay: "230ms" },
				children: profile.tagline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rise-in mt-3 max-w-[22rem] text-sm text-muted-foreground",
				style: { animationDelay: "300ms" },
				children: profile.bio
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "rise-in mt-4 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground",
				style: { animationDelay: "360ms" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-3.5 w-3.5 text-primary" }), profile.instagram]
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var baseClasses = "group flex w-full items-center gap-4 rounded-2xl border border-border glass-panel px-4 py-4 text-left transition-all duration-300 hover:border-primary/60 hover:shadow-[var(--glow-strong)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985] sm:px-5";
function Inner({ icon, label, hint, trailing }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20",
			children: icon
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate font-display text-[15px] font-semibold tracking-tight text-foreground sm:text-base",
				children: label
			}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block truncate text-xs text-muted-foreground",
				children: hint
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-primary",
			children: trailing
		})
	] });
}
function LinkButtonAnchor(props) {
	const { href, className, ...rest } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: cn(baseClasses, className),
		"aria-label": props.label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inner, {
			...rest,
			icon: props.icon,
			label: props.label
		})
	});
}
function LinkButtonAction(props) {
	const { onClick, expanded, controls, className, ...rest } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-expanded": expanded,
		"aria-controls": controls,
		className: cn(baseClasses, expanded && "border-primary/60 shadow-[var(--glow-strong)]", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inner, {
			...rest,
			icon: props.icon,
			label: props.label
		})
	});
}
function ServicesAccordion() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkButtonAction, {
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "h-5 w-5" }),
		label: "Mening xizmatlarim",
		hint: "Men taklif qiladigan xizmatlar",
		expanded: open,
		controls: "services-submenu",
		onClick: () => setOpen((v) => !v),
		trailing: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 transition-transform duration-300 ${open ? "rotate-180 text-primary" : ""}` })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id: "services-submenu",
		className: `grid transition-all duration-400 ease-out ${open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 pl-3 sm:pl-5 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-2xl border border-border/50 bg-surface/50 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-foreground",
							children: "Veb-saytlar yaratish"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Zamonaviy, tezkor va biznesingiz uchun moslashtirilgan veb-saytlar."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-2xl border border-border/50 bg-surface/50 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-foreground",
							children: "Telegram botlar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Savdoni va mijozlar bilan ishlashni avtomatlashtiruvchi botlar."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-2xl border border-border/50 bg-surface/50 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonitorSmartphone, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-foreground",
							children: "Mobil ilovalar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Android va iOS uchun sifatli va qulay dasturlar yaratish."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkButtonAnchor, {
							href: links.admin,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4.5 w-4.5" }),
							label: "Xizmatlarga buyurtma",
							hint: "Men bilan bog'lanish",
							trailing: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4.5 w-4.5" }),
							className: "bg-primary/10 border-primary/20 hover:bg-primary/20"
						})
					})
				]
			})
		})
	})] });
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "ambient-bg relative flex min-h-screen flex-col items-center justify-between overflow-hidden px-5 py-10 sm:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-[480px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-9 flex flex-col gap-3.5",
				"aria-label": "Social links",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rise-in",
						style: { animationDelay: "430ms" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkButtonAnchor, {
							href: links.telegramChannel,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-5 w-5" }),
							label: "Telegram Kanal",
							hint: "Kanalga a'zo bo'lish",
							trailing: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4.5 w-4.5" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rise-in",
						style: { animationDelay: "510ms" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkButtonAnchor, {
							href: links.projects,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-5 w-5" }),
							label: "Loyihalarim",
							hint: "Barcha proyektlar",
							trailing: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4.5 w-4.5" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rise-in",
						style: { animationDelay: "590ms" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesAccordion, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rise-in",
						style: { animationDelay: "670ms" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkButtonAnchor, {
							href: links.admin,
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" }),
							label: "Telegram Lichka",
							hint: "To'g'ridan-to'g'ri bog'lanish",
							trailing: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4.5 w-4.5" })
						})
					})
				]
			})]
		})]
	});
}
//#endregion
export { Index as component };

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  MessageCircle,
  Clock,
  MailX,
  Repeat2,
  CalendarX2,
  Bot,
  HeadphonesIcon,
  CalendarCheck2,
  Plug,
  Settings2,
  Rocket,
  LineChart,
  ShieldCheck,
  Zap,
  Users,
  Sparkles,
  Check,
  ChevronDown,
  Menu,
  X,
  Send,
  Loader2,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Replyly — WhatsApp Automation for Customer Conversations" },
      {
        name: "description",
        content:
          "Automate FAQs, customer support, and bookings on WhatsApp. Reply in seconds, 24/7 — without growing your team.",
      },
      { property: "og:title", content: "Replyly — WhatsApp Automation" },
      {
        property: "og:description",
        content:
          "Automate FAQs, support, and bookings on WhatsApp. Reply instantly, 24/7.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

const NAV_LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#service", label: "Service" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#why-us", label: "Why us" },
  { href: "#faq", label: "FAQ" },
];

function LandingPage() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar open={navOpen} setOpen={setNavOpen} />
      <main>
        <Hero />
        <Problem />
        <Service /> 
        <HowItWorks />
        <WhyUs />
        <FAQ />
        <EnquiryForm />
      </main>
      <Footer />
    </div>
  );
}
import logo from "../image/LOGO_R.png";

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 font-bold text-lg">
      <img src={logo} alt="Synha logo" className="h-9 w-9 rounded-full" />
      {/*<span className="grid h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)]">
        <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
      </span>*/}
      <span className="tracking-tight">Synha</span>
    </a>
  );
}

function Navbar({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#enquiry" className="btn-primary hidden text-sm md:inline-flex">
            Get Started
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3 text-sm">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#enquiry"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full text-sm"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-action">
            <Sparkles className="h-3.5 w-3.5" />
            WhatsApp Automation Services
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Automate your customer conversations on{" "}
            <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              WhatsApp
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Reply to FAQs, handle support, and take bookings 24/7 — without
            growing your team. Set up smart WhatsApp flows in days, not months.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#enquiry" className="btn-primary">
              Get Started
              <Send className="h-4 w-4" />
            </a>
            {/*<a href="#how-it-works" className="btn-outline">
              See how it works
            </a>*/}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" /> No-code setup
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" /> 24/7 instant replies
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" /> Human handoff
            </span>
          </div>
        </div>
        <div className="animate-float-in">
          <ChatPreview />
        </div>
      </div>
    </section>
  );
}

function ChatPreview() {
  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute -inset-4 rounded-[2.2rem] bg-[image:var(--gradient-primary)] opacity-20 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-3 bg-[image:var(--gradient-primary)] px-5 py-4 text-white">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
            <Bot className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm text-white/80">Synha Assistant</p>
            <p className="text-xs text-white/80">online</p>
          </div>
        </div>
        <div className="space-y-3 bg-[var(--color-chat-bg)] px-5 py-6">
          <ChatBubble side="in">Hi! Do you have appointments available this Saturday?</ChatBubble>
          <ChatBubble side="out">
            Hi Mohit! Yes — we have 10:00, 13:30, and 16:00 open this Saturday. Which works best?
          </ChatBubble>
          <ChatBubble side="in">13:30 please 🙏</ChatBubble>
          <ChatBubble side="out">
            Booked! ✅ I've sent you a confirmation with directions and a reminder for Saturday at 13:30.
          </ChatBubble>
          <div className="flex items-center gap-2 pt-2">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">Assistant is typing…</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ side, children }: { side: "in" | "out"; children: React.ReactNode }) {
  const isOut = side === "out";
  return (
    <div className={`flex ${isOut ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
          isOut
            ? "rounded-br-md bg-[var(--color-chat-bubble-out)] text-foreground"
            : "rounded-bl-md bg-[var(--color-chat-bubble-in)] text-foreground"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </div>
  );
}

const PROBLEMS = [
  { icon: MailX, title: "Missed messages", text: "Customers slip through the cracks when your inbox piles up overnight." },
  { icon: Clock, title: "Slow response times", text: "Buyers expect a reply in minutes — not the next business day." },
  { icon: Repeat2, title: "Repetitive FAQs", text: "Your team answers the same 10 questions all day, every day." },
  { icon: CalendarX2, title: "Lost after-hours bookings", text: "Leads vanish when no one's there to confirm an appointment." },
];

function Problem() {
  return (
    <section id="problem" className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="The problem"
          title="Manual WhatsApp is costing you customers"
          description="Most businesses lose revenue not because of bad service — but because they can't reply fast enough."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-soft p-6 transition-transform hover:-translate-y-1">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Bot,
    title: "FAQ Automation",
    text: "Train smart flows on your business info. Customers get instant, accurate answers — anytime.",
  },
  {
    icon: CalendarCheck2,
    title: "Appointment Bookings",
    text: "Let customers check availability and book appointments directly inside WhatsApp.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    text: "Triage requests, capture details, and seamlessly hand off complex cases to a human teammate.",
  },
  
];

function Service() {
  return (
    <section id="service" className="bg/40 px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="What we do"
          title="WhatsApp automation, built for your business"
          description="One platform for FAQs, customer support, and bookings — connected to the number your customers already message."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-soft p-7">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-white shadow-[var(--shadow-soft)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="mt-20">
          <SectionHeader
            eyebrow="Pricing"
            title="Simple plans. Real results."
            description="Start small and scale as your conversations grow. Cancel anytime."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <PricingCard
              name="Essential"
              price="Staring from ₹1999"
              tagline="For small businesses getting started with WhatsApp automation."
              features={[
                "FAQ automation",
                "Basic support replies",
                "Enquiry Handling",
                "Lead Capture Bot",
                "24/7 support",
              ]}
              cta="Choose Essential"
            />
            <PricingCard
              name="Elevate"
              price="Staring from ₹3499"
              tagline="For growing businesses ready to Elevate their customer flow to the next level."
              features={[
                "AI Powered FAQs",
                "AI Consultaion",
                "AI Pre-Screening",
                "Appointment Booking",
                "Nurture Sequence",
              ]}
              cta="Choose Elevate"
              popular
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  name,
  price,
  tagline,
  features,
  cta,
  popular,
}: {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  cta: string;
  popular?: boolean;
}) {
  return (
    <div
      className={`card-soft relative flex flex-col p-7 ${
        popular ? "border-primary ring-2 ring-primary/30" : ""
      }`}
    >
      {popular && (
        <span className="absolute -top-3 right-6 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1 text-xs font-semibold text-white shadow-[var(--shadow-soft)]">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{tagline}</p>
      
      <ul className="mt-6 space-y-3 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-2xl font-extrabold tracking-tight">{price}</span>
        <span className="text-sm text-muted-foreground">/mo</span>
      </div>

      <a
        href="#enquiry"
        className={`mt-8 ${popular ? "btn-primary" : "btn-outline"}`}
      >
        {cta}
      </a>
    </div>
  );
}

const STEPS = [
  { icon: Plug, title: "Connect", text: "Plug in your WhatsApp Business number in a few clicks." },
  { icon: Settings2, title: "Configure", text: "We build your FAQ, support, and booking flows for you." },
  { icon: Rocket, title: "Go live", text: "Switch on automation and start replying instantly, 24/7." },
  { icon: LineChart, title: "Optimize", text: "Track every conversation and improve flows over time." },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="How it works"
          title="From zero to automated in days"
          description="A simple, guided rollout — no engineering team required on your side."
        />
        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative text-center">
                <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-white shadow-[var(--shadow-soft)]">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full border border-border bg-background text-xs font-bold text-action">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const DIFFERENTIATORS = [
  { icon: Zap, title: "No-code setup", text: "Launch in days without writing a single line of code." },
  { icon: Clock, title: "24/7 automation", text: "Always-on replies, even outside business hours." },
  { icon: Users, title: "Smart human handoff", text: "Escalate to a teammate the moment a chat needs a human." },
  { icon: ShieldCheck, title: "Secure & compliant", text: "Built on the official WhatsApp Business API with end-to-end encryption." },
];

function WhyUs() {
  return (
    <section id="why-us" className="bg/40 px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Why us"
          title="Built for teams that hate slow replies"
          description="We obsess over response time, accuracy, and a smooth customer experience."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-soft p-6 transition-transform hover:-translate-y-1">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "How long does setup take?",
    a: "Most customers go live in 3–7 days. Once your WhatsApp Business number is verified, we configure your flows and you're ready to launch.",
  },
  {
    q: "Do I need a WhatsApp Business API account?",
    a: "Yes — we'll guide you through the official Meta verification process.",
  },
  {
    q: "How is pricing structured?",
    a: "You pay a flat monthly subscription based on your plan. WhatsApp's per-conversation fees from Meta are billed separately and itemized.",
  },
  {
    q: "Can the bot match my brand and tone?",
    a: "Absolutely. We tailor every flow to your voice, products, and processes — and you can edit replies anytime.",
  },
  {
    q: "How is customer data handled?",
    a: "All conversations are encrypted in transit and at rest. We're GDPR-aligned and never sell or share customer data.",
  },
  {
    q: "What support do I get after launch?",
    a: "Every plan includes ongoing support. Elevate customers get a dedicated success manager and priority response times.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg/px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="Questions, answered" />
        <div className="mt-10 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="card-soft overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type FormState = "idle" | "submitting" | "success" | "error";

function EnquiryForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setState("submitting");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      company_name: String(fd.get("company_name") || "").trim() || null,
      message: String(fd.get("message") || "").trim() || null,
      plan_interest: String(fd.get("plan_interest") || "unsure"),
    };

    if (!payload.name || !payload.email || !payload.phone) {
      setState("error");
      setError("Please fill in your name, email and phone number.");
      return;
    }

    const { error: dbError } = await supabase.from("enquiries").insert(payload);
    if (dbError) {
      console.error(dbError);
      setState("error");
      setError("Something went wrong. Please try again in a moment.");
      return;
    }
    formRef.current?.reset();
    setState("success");
  }

  return (
    <section id="enquiry" className="bg-[image:var(--gradient-hero)] px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Get in touch"
          title="Tell us about your business"
          description="Share a few details and we'll get back within one business day with next steps."
        />
        <div className="mt-10 card-soft p-6 sm:p-9">
          {state === "success" ? (
            <SuccessMessage onReset={() => setState("idle")} />
          ) : (
            <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Full Name" required />
                <Field label="Email" name="email" type="email" placeholder="name@company.com" required />
                <Field label="Phone Number" name="phone" type="tel" placeholder="+91 99888-XXXXX" required />
                <Field label="Company Name" name="company_name" placeholder="Company Name" />
              </div>
              <div>
                <Label>Interest</Label>
                <div className="relative mt-1.5">
                  <select
                    name="plan_interest"
                    defaultValue="unsure"
                    className="w-full appearance-none rounded-xl border border-input bg-background px-4 py-3 pr-10 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
                  >
                    <option value="starter">Starter Plan</option>
                    <option value="growth">Growth Plan</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
              <div>
                <Label>Message / Requirements</Label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={2000}
                  placeholder="What would you like to automate on WhatsApp?"
                  className="mt-1.5 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
                />
              </div>
              {error && (
                <p className="text-sm text-destructive" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={state === "submitting"}
                className="btn-primary w-full text-base disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {state === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send Enquiry <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="animate-fade-up py-6 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)]">
        <Check className="h-7 w-7" strokeWidth={3} />
      </div>
      <h3 className="mt-5 text-2xl font-bold">Thanks — we've got it!</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
        Your enquiry is in. Our team will reach out within one business day with next steps.
      </p>
      <button type="button" onClick={onReset} className="btn-outline mt-6 text-sm">
        Send another enquiry
      </button>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-medium text-foreground">{children}</label>;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </Label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
      />
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-dark-surface)] text-[var(--color-dark-foreground)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 sm:items-center">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-[var(--color-dark-foreground)]/70">
            Smart WhatsApp automation for FAQs, customer support, and bookings.
          </p>
        </div>
        <div className="flex items-center gap-3 sm:justify-end">
          {[
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/synha" },
            { icon: Instagram, label: "Instagram", href: "https://www.linkedin.com/company/synha" },
            { icon: Facebook, label: "Facebook", href: "https://www.linkedin.com/company/synha" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-dark-foreground)]/25 text-[var(--color-dark-foreground)]/80 transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-[var(--color-dark-foreground)]/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-[var(--color-dark-foreground)]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Synha. All rights reserved.</p>
          <p>Made with care for businesses that love their customers.</p>
        </div>
      </div>
    </footer>
  );
}

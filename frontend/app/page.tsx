import { DemoForm } from "@/components/demo-form"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/75">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-neutral-900">
              <span className="text-white font-semibold text-sm tracking-tight">A</span>
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-neutral-900">
              AIComply.be
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
            <a href="#probleem" className="hover:text-neutral-900 transition-colors">Probleem</a>
            <a href="#oplossing" className="hover:text-neutral-900 transition-colors">Oplossing</a>
            <a href="#prijs" className="hover:text-neutral-900 transition-colors">Prijzen</a>
            <a href="#demo" className="hover:text-neutral-900 transition-colors">Contact</a>
          </nav>

          <Button asChild size="sm" className="bg-neutral-900 hover:bg-neutral-800 rounded-sm">
            <a href="#demo">Boek een demo</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              <span className="h-px w-6 bg-neutral-300" />
              EU AI Act · België
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.05]">
              EU AI Act compliant in een uur.
            </h1>

            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-neutral-600 max-w-2xl">
              Compliance-software voor Belgische KMO&apos;s. In het Nederlands, audit-ready en
              zonder dure consultants.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="bg-neutral-900 hover:bg-neutral-800 rounded-sm">
                <a href="#demo">Boek een demo</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-neutral-300 hover:bg-neutral-50 rounded-sm"
              >
                <a href="#oplossing">Hoe werkt het?</a>
              </Button>
            </div>
          </div>

          <dl className="mt-20 grid grid-cols-1 sm:grid-cols-3 border-t border-neutral-200">
            {[
              { k: "< 1 uur", v: "Setup-tijd" },
              { k: "100%", v: "In het Nederlands" },
              { k: "2 aug 2026", v: "Wettelijke deadline" },
            ].map((s, i) => (
              <div
                key={s.v}
                className={`py-8 ${i > 0 ? "sm:border-l border-neutral-200 sm:pl-8" : ""}`}
              >
                <dt className="text-3xl font-semibold tracking-tight text-neutral-900">{s.k}</dt>
                <dd className="mt-2 text-sm text-neutral-500">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Probleem */}
      <section id="probleem" className="border-b border-neutral-200 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                01 — Het probleem
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
                Compliance is complex. De deadline is dichtbij.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-lg leading-relaxed text-neutral-700">
              <p>
                Vanaf 2 augustus 2026 moet elke EU-organisatie die AI gebruikt voldoen aan de
                EU AI Act. Dat betekent een AI literacy plan, een gedocumenteerde inventory van
                alle AI-tools, risk assessments en interne policies.
              </p>
              <p className="text-neutral-600">
                Boetes lopen op tot{" "}
                <span className="font-semibold text-neutral-900">€15 miljoen</span>. Maar minder
                dan <span className="font-semibold text-neutral-900">30%</span> van de Belgische
                KMO&apos;s is voorbereid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oplossing */}
      <section id="oplossing" className="border-b border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                02 — De oplossing
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
                Drie stappen naar volledige compliance
              </h2>
              <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                Van inventory tot dashboard — alles geautomatiseerd, audit-ready en in het
                Nederlands.
              </p>
            </div>

            <div className="lg:col-span-8 divide-y divide-neutral-200 border-y border-neutral-200">
              {[
                {
                  n: "01",
                  t: "AI Inventory",
                  d: "Lijst alle AI-tools die uw organisatie gebruikt. Wij classificeren automatisch het risico-niveau volgens de AI Act.",
                },
                {
                  n: "02",
                  t: "Documenten",
                  d: "AI literacy plan, gebruikspolicy, risk assessment. Automatisch gegenereerd, audit-ready, in het Nederlands.",
                },
                {
                  n: "03",
                  t: "Dashboard",
                  d: "Bekijk uw compliance score, gap-analyse en updates wanneer regelgeving verandert.",
                },
              ].map((f) => (
                <div
                  key={f.n}
                  className="grid grid-cols-12 gap-6 py-8 transition-colors hover:bg-neutral-50/60"
                >
                  <div className="col-span-2 sm:col-span-1 text-sm font-mono text-neutral-400 pt-1">
                    {f.n}
                  </div>
                  <div className="col-span-10 sm:col-span-11">
                    <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
                      {f.t}
                    </h3>
                    <p className="mt-2 text-neutral-600 leading-relaxed max-w-2xl">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prijs */}
      <section id="prijs" className="border-b border-neutral-200 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              03 — Prijzen
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
              Eenvoudig en transparant
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Geen verborgen kosten. Geen verplichte consultants.
            </p>
          </div>

          <div className="mt-14 max-w-md mx-auto">
            <div className="rounded-sm bg-white border border-neutral-900 p-8">
              <div className="flex items-baseline justify-between border-b border-neutral-200 pb-5">
                <h3 className="text-base font-semibold uppercase tracking-[0.18em] text-neutral-900">
                  Pro
                </h3>
                <span className="text-xs text-neutral-500">Per organisatie</span>
              </div>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-5xl font-semibold tracking-tight text-neutral-900">€99</span>
                <span className="text-neutral-500">/maand</span>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-neutral-700">
                {[
                  "Onbeperkt aantal AI-tools in inventory",
                  "Alle compliance-documenten",
                  "Compliance dashboard",
                  "Auto-updates bij regelwijzigingen",
                  "Email-ondersteuning in het Nederlands",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-neutral-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.296a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414L8.5 12.09l6.79-6.794a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="mt-8 w-full bg-neutral-900 hover:bg-neutral-800 rounded-sm"
              >
                <a href="#demo">Boek een demo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="border-b border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Demo
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
                Klaar voor een demo?
              </h2>
              <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
                15 minuten. Geen commitment. We laten u zien hoe AIComply werkt voor uw
                organisatie.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-neutral-700">
                {[
                  "Persoonlijke demonstratie van uw use case",
                  "Antwoord op al uw compliance-vragen",
                  "Reactie binnen 24 uur",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-px w-4 bg-neutral-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-neutral-900">
              <span className="text-white font-semibold text-xs">A</span>
            </div>
            <span className="text-sm font-semibold tracking-tight text-neutral-900">
              AIComply.be
            </span>
          </div>
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} AIComply. Gemaakt in België.
          </p>
        </div>
      </footer>

    </main>
  )
}

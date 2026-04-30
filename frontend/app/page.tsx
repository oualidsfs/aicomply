import { DemoForm } from "@/components/demo-form"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-linear-to-br from-slate-900 to-indigo-700 flex items-center justify-center shadow-sm ring-1 ring-slate-900/10">
              <span className="text-white font-semibold text-sm tracking-tight">A</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              AIComply<span className="text-indigo-600">.be</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#probleem" className="hover:text-slate-900 transition-colors">Probleem</a>
            <a href="#oplossing" className="hover:text-slate-900 transition-colors">Oplossing</a>
            <a href="#prijs" className="hover:text-slate-900 transition-colors">Prijzen</a>
          </nav>

          <Button asChild size="sm" className="bg-slate-900 hover:bg-slate-800">
            <a href="#demo">Boek een demo</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,var(--color-indigo-100),transparent_70%)]/60"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-slate-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-slate-200)_1px,transparent_1px)] bg-size-[48px_48px] opacity-50 mask-[radial-gradient(ellipse_at_top,black,transparent_70%)]"
        />

        <div className="container mx-auto px-4 sm:px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Deadline EU AI Act: 2 augustus 2026
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.05]">
              EU AI Act compliant{" "}
              <span className="bg-linear-to-r from-indigo-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                in een uur.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-600 max-w-2xl">
              Voor Belgische KMOs. In het Nederlands. Zonder dure consultants of weken werk.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-900/10">
                <a href="#demo">Boek een demo</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50">
                <a href="#oplossing">Hoe werkt het?</a>
              </Button>
            </div>

            <dl className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              {[
                { k: "< 1 uur", v: "Setup-tijd" },
                { k: "100%", v: "In het Nederlands" },
                { k: "€0", v: "Consultants nodig" },
              ].map((s) => (
                <div key={s.v} className="border-l-2 border-slate-200 pl-4">
                  <dt className="text-2xl font-semibold tracking-tight text-slate-900">{s.k}</dt>
                  <dd className="text-sm text-slate-500 mt-1">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Probleem */}
      <section id="probleem" className="border-y border-slate-200 bg-slate-50/70">
        <div className="container mx-auto px-4 sm:px-6 py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
              Het probleem
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Compliance is complex. De deadline is dichtbij.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Vanaf 2 augustus 2026 moet elke EU-organisatie die AI gebruikt voldoen aan de
                EU AI Act. Dat betekent een AI literacy plan, een gedocumenteerde inventory van
                alle AI-tools, risk assessments en interne policies.
              </p>
              <p>
                Boetes lopen op tot{" "}
                <span className="font-semibold text-slate-900">€15 miljoen</span>. Maar minder
                dan <span className="font-semibold text-slate-900">30%</span> van de Belgische
                KMOs is voorbereid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oplossing */}
      <section id="oplossing" className="container mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
            De oplossing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Drie stappen naar volledige compliance
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Van inventory tot dashboard — alles geautomatiseerd, audit-ready en in het Nederlands.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
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
              className="group relative rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-slate-900 to-indigo-700 text-white text-sm font-semibold tracking-wider shadow-sm">
                  {f.n}
                </div>
                <span className="text-xs font-medium text-slate-400 group-hover:text-indigo-500 transition-colors">
                  Stap {f.n.replace("0", "")}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-900">
                {f.t}
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prijs */}
      <section id="prijs" className="border-t border-slate-200 bg-slate-50/70">
        <div className="container mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
              Prijzen
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Eenvoudig en transparant
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Geen verborgen kosten. Geen verplichte consultants.
            </p>
          </div>

          <div className="mt-12 max-w-md mx-auto">
            <div className="relative rounded-2xl bg-white p-8 ring-1 ring-slate-900 shadow-2xl shadow-slate-900/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Meest gekozen
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">Pro</h3>
                <span className="text-xs text-slate-500">Per organisatie</span>
              </div>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-semibold tracking-tight text-slate-900">€99</span>
                <span className="text-slate-500">/maand</span>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-slate-600">
                {[
                  "Onbeperkt aantal AI-tools in inventory",
                  "Alle compliance-documenten",
                  "Compliance dashboard",
                  "Auto-updates bij regelwijzigingen",
                  "Email-ondersteuning in het Nederlands",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600"
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

              <Button asChild size="lg" className="mt-8 w-full bg-slate-900 hover:bg-slate-800">
                <a href="#demo">Boek een demo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="container mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
            Demo
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Klaar voor een demo?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            15 minuten. Geen commitment. We laten u zien hoe AIComply werkt voor uw organisatie.
          </p>
        </div>
        <DemoForm />
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-linear-to-br from-slate-900 to-indigo-700 flex items-center justify-center">
              <span className="text-white font-semibold text-xs">A</span>
            </div>
            <span className="text-sm font-semibold tracking-tight text-slate-900">
              AIComply<span className="text-indigo-600">.be</span>
            </span>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} AIComply. Gemaakt in België.
          </p>
        </div>
      </footer>

    </main>
  )
}

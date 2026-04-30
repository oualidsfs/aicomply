"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type FormData = {
  name: string
  email: string
  company: string
}

export function DemoForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-neutral-200 bg-white p-10 text-center">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300">
          <svg
            className="h-5 w-5 text-neutral-900"
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
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">Bedankt</h3>
        <p className="mt-2 text-neutral-600 leading-relaxed">
          We nemen binnen 24 uur contact op om uw demo in te plannen.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-neutral-200 bg-white p-8 space-y-6"
    >
      <div className="space-y-2">
        <Label
          htmlFor="name"
          className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-700"
        >
          Naam
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Jan Janssens"
          className="h-11 rounded-sm border-neutral-300 bg-white focus-visible:ring-1 focus-visible:ring-neutral-900 focus-visible:border-neutral-900"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-700"
        >
          Zakelijk e-mailadres
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="jan@bedrijf.be"
          className="h-11 rounded-sm border-neutral-300 bg-white focus-visible:ring-1 focus-visible:ring-neutral-900 focus-visible:border-neutral-900"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="company"
          className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-700"
        >
          Bedrijf
        </Label>
        <Input
          id="company"
          name="company"
          type="text"
          required
          value={formData.company}
          onChange={handleChange}
          placeholder="Mijn Bedrijf BV"
          className="h-11 rounded-sm border-neutral-300 bg-white focus-visible:ring-1 focus-visible:ring-neutral-900 focus-visible:border-neutral-900"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="w-full rounded-sm bg-neutral-900 hover:bg-neutral-800"
      >
        {loading ? "Bezig met versturen…" : "Boek mijn demo"}
      </Button>

      <p className="text-xs text-neutral-500 leading-relaxed">
        Door te versturen gaat u akkoord met onze{" "}
        <a href="#" className="underline underline-offset-2 hover:text-neutral-900">
          privacyvoorwaarden
        </a>
        . Wij verkopen uw gegevens niet.
      </p>
    </form>
  )
}

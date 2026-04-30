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

    // Voor nu: gewoon 1 seconde wachten en succesvol melden
    // Later: echte API call naar Supabase
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="max-w-md mx-auto rounded-2xl bg-white p-10 text-center ring-1 ring-slate-200 shadow-xl shadow-slate-900/5">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
          <svg
            className="h-7 w-7 text-emerald-600"
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
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
          Bedankt!
        </h3>
        <p className="mt-2 text-slate-600 leading-relaxed">
          We nemen binnen 24 uur contact op om uw demo in te plannen.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto rounded-2xl bg-white p-8 ring-1 ring-slate-200 shadow-xl shadow-slate-900/5 space-y-5"
    >
      <div className="space-y-1.5">
        <Label htmlFor="name" className="text-sm font-medium text-slate-700">
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
          className="h-11 border-slate-200 focus-visible:ring-slate-900/10 focus-visible:border-slate-900"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="jan@bedrijf.be"
          className="h-11 border-slate-200 focus-visible:ring-slate-900/10 focus-visible:border-slate-900"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="company" className="text-sm font-medium text-slate-700">
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
          className="h-11 border-slate-200 focus-visible:ring-slate-900/10 focus-visible:border-slate-900"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="w-full bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-900/10"
      >
        {loading ? "Bezig met versturen..." : "Boek mijn demo"}
      </Button>

      <p className="text-center text-xs text-slate-500">
        Door te versturen gaat u akkoord met onze privacyvoorwaarden.
      </p>
    </form>
  )
}

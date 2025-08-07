"use client"
import React from "react"

export function EmailForm() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value
    if (!email) return

    try {
      await fetch("https://n8n.salmanshahriar.com/webhook/5bdb349a-b870-4fcd-ab55-8cbdc034f23a", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      alert("Thank you! You'll be notified.")
      form.reset()
    } catch {
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <form className="flex flex-col sm:flex-row items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="might send you love letters;)"
        className="px-20 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white-500"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 rounded bg-white text-black font-semibold hover:bg-gray-200 transition"
      >
        Notify Me
      </button>
    </form>
  )
}
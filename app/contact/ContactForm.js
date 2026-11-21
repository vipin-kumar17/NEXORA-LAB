"use client";
import { useState } from "react";
import { services } from "@/lib/constants";

const budgets = ["Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Not sure yet"];
const times = ["As soon as possible", "1 – 3 months", "3 – 6 months", "Flexible"];

function Field({ id, label, req, err, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm">{label}{req && " *"}</label>
      {children}
      {err && <p id={id + "-e"} className="err mt-1">{err}</p>}
    </div>
  );
}

export default function ContactForm() {
  const [st, setSt] = useState({ status: "idle", errors: {}, msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form));
    const errors = {};
    if (!d.name?.trim()) errors.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(d.email || "")) errors.email = "Enter a valid email address.";
    if (!d.service) errors.service = "Choose a service.";
    if (!d.details?.trim() || d.details.trim().length < 10) errors.details = "Describe your project in at least 10 characters.";
    if (Object.keys(errors).length) return setSt({ status: "idle", errors, msg: "" });

    setSt({ status: "loading", errors: {}, msg: "" });
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const j = await r.json();
      if (r.ok) form.reset();
      setSt({ status: r.ok ? "success" : "error", errors: {}, msg: j.message });
    } catch {
      setSt({ status: "error", errors: {}, msg: "Network error. Please try again." });
    }
  }

  const p = (id) => ({
    id,
    name: id,
    className: "field",
    "aria-invalid": !!st.errors[id],
    "aria-describedby": st.errors[id] ? id + "-e" : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="card grid gap-4">
      {st.status === "success" && (
        <div role="status" className="rounded-lg border border-green-500/40 bg-green-500/10 p-4">
          <p className="font-semibold text-green-400">Message sent</p>
          <p className="mut mt-1 text-sm">{st.msg}</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Full name" req err={st.errors.name}><input {...p("name")} autoComplete="name" /></Field>
        <Field id="email" label="Email address" req err={st.errors.email}><input {...p("email")} type="email" autoComplete="email" /></Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="phone" label="Phone number (optional)"><input {...p("phone")} type="tel" /></Field>
        <Field id="company" label="Company name (optional)"><input {...p("company")} /></Field>
      </div>
      <Field id="service" label="Interested service" req err={st.errors.service}>
        <select {...p("service")} defaultValue="">
          <option value="" disabled>Select a service</option>
          {services.map((s) => <option key={s.slug}>{s.title}</option>)}
        </select>
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="budget" label="Estimated budget">
          <select {...p("budget")} defaultValue={budgets[4]}>{budgets.map((b) => <option key={b}>{b}</option>)}</select>
        </Field>
        <Field id="timeline" label="Project timeline">
          <select {...p("timeline")} defaultValue={times[3]}>{times.map((b) => <option key={b}>{b}</option>)}</select>
        </Field>
      </div>
      <Field id="details" label="Project details" req err={st.errors.details}>
        <textarea {...p("details")} rows={5} />
      </Field>

      {st.status === "error" && <p className="err" role="alert">{st.msg}</p>}
      <button className="btn btn-p justify-center" disabled={st.status === "loading"}>
        {st.status === "loading" ? "Sending..." : "Send project details"}
      </button>
    </form>
  );
}
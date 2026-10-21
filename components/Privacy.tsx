"use client"

import { AnimatePresence, motion, useInView } from "framer-motion"
import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { primaryButtonClass } from "@/lib/buttonStyles"

type LegalSection = "privacy" | "terms" | "redo"

function LegalAccordion({
  id,
  title,
  description,
  open,
  onToggle,
  children,
}: {
  id: LegalSection
  title: string
  description: string
  open: boolean
  onToggle: () => void
  children: ReactNode
}) {
  return (
    <article className="overflow-hidden rounded-[1.4rem] border border-[#173c2a]/10 bg-white shadow-[0_12px_34px_rgba(28,55,39,0.04)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${id}-content`}
        className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0D8E4B] sm:px-7 sm:py-6"
      >
        <span>
          <span className="block text-lg font-semibold text-[#153d29] sm:text-xl">{title}</span>
          <span className="mt-1 block text-sm leading-6 text-[#68766e]">{description}</span>
        </span>
        <span className="shrink-0 text-sm font-semibold text-[#0D7D43]">{open ? "Hide" : "Read"}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-content`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#173c2a]/10 px-5 py-6 text-base leading-7 text-[#46564d] sm:px-7 sm:py-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export default function PrivacyPolicyView() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [openSection, setOpenSection] = useState<LegalSection | null>("privacy")

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("section")

    if (requested === "privacy" || requested === "terms" || requested === "redo") {
      setOpenSection(requested)
    } else if (requested === "refund") {
      setOpenSection("redo")
    }
  }, [])

  const toggleSection = (section: LegalSection) => {
    setOpenSection((current) => (current === section ? null : section))
  }

  return (
    <section ref={ref} className="min-h-screen py-12 sm:py-16 lg:py-20">
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mb-9 max-w-3xl sm:mb-12"
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#29794a]">Legal & policies</p>
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-[#102d20]">
          Clear terms for every booking.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#5b6961] sm:text-lg">
          Review how we protect your information, the terms that apply to our services, and how service corrections are handled.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl space-y-4"
      >
        <LegalAccordion
          id="privacy"
          title="Privacy & Data Protection Policy"
          description="How we collect, use and protect customer information."
          open={openSection === "privacy"}
          onToggle={() => toggleSection("privacy")}
        >
          <div className="space-y-7">
            <div>
              <h2 className="text-xl font-semibold text-[#173f2a]">Purpose</h2>
              <p className="mt-2">
                This policy explains how Lumina Green 360 collects, uses and protects the personal and operational information needed to provide our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#173f2a]">Policy statements</h2>
              <p className="mt-2">Lumina Green 360 shall:</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 marker:font-semibold marker:text-[#0D7D43]">
                <li>Collect only necessary personal and operational information.</li>
                <li>Protect client records and service data.</li>
                <li>Prevent unauthorized access to user information.</li>
                <li>Use collected information only for operational and service purposes.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#173f2a]">Information we may collect</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#0D7D43]">
                <li>User booking information</li>
                <li>Contact details</li>
                <li>Payment records</li>
              </ul>
            </div>
          </div>
        </LegalAccordion>

        <LegalAccordion
          id="terms"
          title="Terms & Conditions of Service"
          description="Booking, payment, site-readiness and service requirements."
          open={openSection === "terms"}
          onToggle={() => toggleSection("terms")}
        >
          <div className="space-y-7">
            <div>
              <h2 className="text-xl font-semibold text-[#173f2a]">1. Booking & payment</h2>
              <p className="mt-2">
                Full payment is required to secure a booking, and proof of payment must be sent. Booking dates are held only until the end of the invoice day.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#173f2a]">2. Utilities requirement</h2>
              <p className="mt-2">
                Clients must provide steady electricity and water throughout the service. If cleaning is rescheduled because utilities are unavailable, the client will cover logistics for the return visit. Where steady electricity is unavailable, petrol costs will be included in the invoice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#173f2a]">3. Scope of service</h2>
              <p className="mt-2">
                Our service covers cleaning. Moving items, clearing debris, detaching fixtures or removals must be completed before our arrival. If requested, these tasks attract additional fees and must be communicated in advance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#173f2a]">4. Site readiness & artisans</h2>
              <p className="mt-2">
                Areas will not be re-cleaned without an extra fee if artisans soil them during or after our work. No construction or renovation activity should take place on the cleaning day. If site conditions prevent work on the agreed date, the service will move to the next available date and the client will cover logistics. Not waiting for rescheduling results in forfeiture of payment. Give at least 24 hours&apos; notice to avoid losses.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#173f2a]">5. Additional services</h2>
              <p className="mt-2">
                Only services listed on the invoice will be provided. Floor polishing, upholstery, carpet or rug cleaning, outdoor cleaning and other extras attract additional charges payable before work begins.
              </p>
            </div>

            <a
              href="/docs/lumina-green-360-terms-and-conditions.pdf"
              download
              className={`${primaryButtonClass} px-6 py-3 text-sm`}
            >
              Download the original terms PDF
            </a>
          </div>
        </LegalAccordion>

        <LegalAccordion
          id="redo"
          title="Service Redo Policy"
          description="What to do if an area needs further attention."
          open={openSection === "redo"}
          onToggle={() => toggleSection("redo")}
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#173f2a]">Requesting a correction</h2>
            <p>
              Clients may request a redo for unsatisfactory areas within 24 hours after service. Lumina Green 360 will schedule a return visit for the necessary corrections.
            </p>
            <p className="font-semibold text-[#173f2a]">
              Please read the service terms before making payment.
            </p>
          </div>
        </LegalAccordion>
      </motion.div>
    </section>
  )
}

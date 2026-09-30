"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const appStores = [
  {
    name: "App Store",
    detail: "Download for iPhone",
    href: "https://apps.apple.com/in/app/lumina-green-360/id6760934964",
    qr: "/app/app-store-qr.jpg",
  },
  {
    name: "Google Play",
    detail: "Get it on Android",
    href: "https://play.google.com/store/apps/details?id=com.afrifusion.lumina_green&hl=en&pli=1",
    qr: "/app/google-play-qr.jpg",
  },
] as const

export function AppDownloadSection() {
  return (
    <section className="w-full py-6 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[1.75rem] border border-[#173c2a]/10 bg-white px-6 py-9 shadow-[0_20px_60px_rgba(28,55,39,0.07)] sm:px-9 sm:py-11 lg:px-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "repeating-radial-gradient(ellipse at 0% 110%, transparent 0, transparent 34px, rgba(21,61,41,0.08) 35px, transparent 36px)",
            WebkitMaskImage: "linear-gradient(90deg, #000 0%, transparent 72%)",
            maskImage: "linear-gradient(90deg, #000 0%, transparent 72%)",
          }}
        />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-center lg:gap-14">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(2.2rem,4.5vw,4.25rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#102d20]">
              Book a cleaner space from your phone.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#5c6a62] sm:text-lg">
              Request pickups, cleaning and other Lumina Green services from the app.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {appStores.map((store) => (
              <a
                key={store.name}
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${store.detail} from ${store.name}`}
                className="group rounded-[1.25rem] border border-[#173c2a]/10 bg-[#f5f6f5] p-3 text-center text-[#102d20] transition duration-200 hover:-translate-y-1 hover:border-[#237d4a]/30 hover:bg-white hover:shadow-[0_16px_36px_rgba(28,55,39,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D8E4B] focus-visible:ring-offset-2 sm:p-4"
              >
                <div className="relative mx-auto aspect-square w-full max-w-36 overflow-hidden rounded-[0.8rem] bg-white p-1">
                  <Image
                    src={store.qr}
                    alt={`${store.name} download QR code`}
                    fill
                    sizes="144px"
                    unoptimized
                    className="object-contain p-1"
                  />
                </div>
                <p className="mt-3 text-xs leading-5 text-[#6b7770]">{store.detail}</p>
                <p className="text-sm font-bold text-[#173f2a] sm:text-base">{store.name}</p>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

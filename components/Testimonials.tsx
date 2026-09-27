"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Aisha M.",
    location: "Old GRA",
    text: "They arrived when they said they would, and the house felt properly clean afterwards. Booking through WhatsApp was straightforward.",
  },
  {
    name: "Ibrahim K.",
    location: "Maiduguri",
    text: "We called them for an office cleanup. The team worked carefully and left everything ready for us the next morning.",
  },
  {
    name: "Fatima A.",
    location: "Bulumkutu",
    text: "Our sofa looks much better now. They explained what they were doing and kept the area tidy while they worked.",
  },
  {
    name: "Mustapha B.",
    location: "GRA",
    text: "Pickup has been reliable and communication is clear. I always know when the team is on the way.",
  },
]

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number]
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="flex min-h-64 flex-col justify-between rounded-[1.25rem] border border-[#173c2a]/10 bg-white p-6 shadow-[0_12px_35px_rgba(28,55,39,0.05)]"
    >
      <div>
        <span className="font-serif text-4xl leading-none text-[#2d8b50]" aria-hidden="true">
          “
        </span>
        <p className="mt-3 text-base leading-7 text-[#3f5047]">{testimonial.text}</p>
      </div>
      <p className="mt-7 border-t border-[#173c2a]/10 pt-4 text-sm text-[#748078]">
        <span className="font-semibold text-[#183225]">{testimonial.name}</span>
        <span aria-hidden="true"> · </span>
        {testimonial.location}
      </p>
    </motion.article>
  )
}

export function Testimonials() {
  return (
    <section className="w-full py-14 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
        className="mb-8 sm:mb-10"
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#29794a]">
          Customer stories
        </p>
        <h2 className="max-w-2xl text-[clamp(2.25rem,4vw,4rem)] font-semibold leading-[1] tracking-[-0.045em] text-[#102d20]">
          What our customers say.
        </h2>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  )
}

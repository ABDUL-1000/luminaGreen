import Image from "next/image"

const highlights = [
  {
    src: "/highlight/wastepuckup.jpeg",
    alt: "Lumina Green waste pickup worker beside collection bins",
    widthClass: "w-[19rem] sm:w-[24rem]",
    position: "object-center",
  },
  {
    src: "/highlight/officecleaning.jpeg",
    alt: "Lumina Green team cleaning a professional interior",
    widthClass: "w-[15rem] sm:w-[18rem]",
    position: "object-[center_58%]",
  },
  {
    src: "/highlight/deep cleaning.jpeg",
    alt: "Lumina Green team carrying out a deep clean",
    widthClass: "w-[20rem] sm:w-[25rem]",
    position: "object-center",
  },
  {
    src: "/highlight/carpet, rugs.jpeg",
    alt: "A Lumina Green specialist cleaning a large rug",
    widthClass: "w-[15rem] sm:w-[18rem]",
    position: "object-[center_58%]",
  },
  {
    src: "/highlight/fumigation-specialist.jpeg",
    alt: "Lumina Green fumigation specialist in protective equipment",
    widthClass: "w-[15rem] sm:w-[18rem]",
    position: "object-[center_34%]",
  },
  {
    src: "/highlight/training.jpeg",
    alt: "Lumina Green practical cleaning training session",
    widthClass: "w-[20rem] sm:w-[25rem]",
    position: "object-center",
  },
  {
    src: "/highlight/upholstery-cleaning.jpeg",
    alt: "Lumina Green team professionally cleaning upholstery",
    widthClass: "w-[15rem] sm:w-[18rem]",
    position: "object-[center_58%]",
  },
  {
    src: "/highlight/exterior-cleaning.jpeg",
    alt: "Lumina Green team cleaning the exterior of a property",
    widthClass: "w-[15rem] sm:w-[18rem]",
    position: "object-center",
  },
  {
    src: "/highlight/detail-cleaning.jpeg",
    alt: "Lumina Green specialist carefully cleaning a ceiling light",
    widthClass: "w-[15rem] sm:w-[18rem]",
    position: "object-[center_42%]",
  },
  {
    src: "/highlight/team-kitchen-cleaning.jpeg",
    alt: "Lumina Green team working together inside a kitchen",
    widthClass: "w-[20rem] sm:w-[25rem]",
    position: "object-center",
  },
  {
    src: "/highlight/WhatsApp Image 2026-09-15 at 7.35.01 PM.jpeg",
    alt: "Lumina Green specialist scrubbing upholstered furniture",
    widthClass: "w-[15rem] sm:w-[18rem]",
    position: "object-center",
  },
  {
    src: "/highlight/WhatsApp Image 2026-09-15 at 7.35.00 PM (1).jpeg",
    alt: "Lumina Green specialist cleaning an exterior window",
    widthClass: "w-[15rem] sm:w-[18rem]",
    position: "object-[center_48%]",
  },
  {
    src: "/highlight/WhatsApp Image 2026-09-15 at 7.34.57 PM.jpeg",
    alt: "Lumina Green cleaning team preparing equipment for a job",
    widthClass: "w-[20rem] sm:w-[25rem]",
    position: "object-center",
  },
  {
    src: "/highlight/WhatsApp Image 2026-09-15 at 7.34.58 PM (1).jpeg",
    alt: "Lumina Green team members representing the company at an event",
    widthClass: "w-[20rem] sm:w-[25rem]",
    position: "object-center",
  },
] as const

export function HighlightsStrip() {
  const reel = [...highlights, ...highlights]

  return (
    <section
      aria-label="Lumina Green work highlights"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-12 sm:py-14 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#f3f4f5] to-transparent sm:w-24 lg:w-36" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f3f4f5] to-transparent sm:w-24 lg:w-36" />

      <div className="highlight-marquee flex w-max gap-4 px-2">
        {reel.map((highlight, index) => (
          <div
            key={`${highlight.src}-${index}`}
            aria-hidden={index >= highlights.length ? true : undefined}
            className={`relative h-52 shrink-0 overflow-hidden rounded-[1.5rem] border border-[#173c2a]/10 bg-white shadow-[0_16px_38px_rgba(21,61,41,0.08)] sm:h-64 lg:h-72 ${highlight.widthClass}`}
          >
            <Image
              src={highlight.src}
              alt={index < highlights.length ? highlight.alt : ""}
              fill
              sizes="(max-width: 640px) 80vw, 400px"
              className={`object-cover ${highlight.position}`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

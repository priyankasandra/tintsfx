import Image from 'next/image'

export default function Workflow() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="rounded-lg overflow-hidden">
        <Image
          src="/ChatGPT Image Sep 2, 2025, 04_51_19 PM.png"
          alt="TINTSFX prosthetic makeup workflow process"
          width={1200}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  )
}

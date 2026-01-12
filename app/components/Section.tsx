type Props = {
  title: string
  children: React.ReactNode
  gray?: boolean
}

export default function Section({ title, children, gray }: Props) {
  return (
    <section className={`${gray ? 'bg-gray-50' : 'bg-white'} py-16`}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-6">
          {title}
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  )
}

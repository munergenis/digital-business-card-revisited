const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-xs text-gray-400">{children}</p>
    </section>
  )
}

export default Section

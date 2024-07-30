import Section from 'components/Section/Section.jsx'

const Main = () => {
  return (
    <main className="w-full px-8 py-8 flex flex-col gap-4">
      <Section title="About">
        I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
      </Section>
      <Section title="Interests">
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </Section>
    </main>
  )
}

export default Main

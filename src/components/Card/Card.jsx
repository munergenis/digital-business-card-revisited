import Header from 'components/Header/Header.jsx'
import Main from 'components/Main/Main.jsx'
import Footer from 'components/Footer/Footer.jsx'

const Card = () => {
  return (
    <div className="bg-gray-900 w-80 rounded-xl my-8">
      {/* Header */}
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Card

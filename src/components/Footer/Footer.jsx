import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faSquareTwitter, faSquareInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='bg-slate-950 flex justify-evenly px-8 py-4 rounded-b-xl'>
      <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faSquareTwitter} size='2xl' style={{ color: '#a6aab0' }} />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faSquareFacebook} size='2xl' style={{ color: '#a6aab0' }} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faSquareInstagram} size='2xl' style={{ color: '#a6aab0' }} />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faSquareGithub} size='2xl' style={{ color: '#a6aab0' }} />
      </a>
    </footer>
  )
}

export default Footer

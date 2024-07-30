import profileAvatar from 'assets/profile-avatar.png'
import Button from 'components/Button/Button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <div className='flex flex-col items-center'>
      <img className='w-full' src={profileAvatar} alt="User profile avatar" />
      <h1 className='text-3xl font-bold mt-4'>Laura Smith</h1>
      <p className='text-sm text-orange-200'>Frontend Developer</p>
      <a className='text-xs text-zinc-400 mt-1 hover:underline' href="#" target='_blank' rel="nooperner noreferrer">laurasmith.website</a>
      <div className="w-full px-8 flex justify-center gap-4 mt-6">
        <Button classes="bg-white text-black" text="Email">
          <FontAwesomeIcon icon={faEnvelope}/>
        </Button>
        <Button classes="bg-blue-400 text-white" text="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </Button>
      </div>
    </div>
  )
}

export default Header

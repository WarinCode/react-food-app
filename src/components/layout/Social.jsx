// import lib
import { TfiGithub } from 'react-icons/tfi';
import { BsYoutube  , BsDiscord } from 'react-icons/bs';
import { SiFacebook  , SiTiktok , SiMinutemailer } from 'react-icons/si';
import { FaTwitter } from 'react-icons/fa';

// import style
import '/src/style/css/layout.css';

function Social() {
  return (
    <span className="social-media">
        <TfiGithub className='icon' />
        <SiFacebook className='icon' />
        <FaTwitter clssName='icon' id='icon-customize' />
        <SiMinutemailer className='icon' />
        <BsYoutube className='icon' />
        <SiTiktok className='icon' />
        <BsDiscord className='icon'  />
    </span>
  )
}

export default Social;
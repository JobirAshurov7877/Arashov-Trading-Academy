import React from 'react';
import './footer.css';
import Logo from '../../images/Logo.png'
import SocialLink from './socialLink';
import TelegramIcon from '../../images/telegram-icon.png'
import InstagramIcon from '../../images/social_insta.png'
import TiktokIcon from '../../images/social_tiktok.png'
import YouTubeIcon from '../../images/You-Tube.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <p>© 2023 Company Name. All rights reserved.</p>
        </div>
        <div className="social">
          <a href="#">Home</a>
          <a href="">Contact</a>
          <SocialLink link={"https://telegram.com"} img={TelegramIcon} />
          <SocialLink link={"https://instagram.com"}  img={InstagramIcon} />
          <SocialLink link={"https://tiktok.com"}  img={TiktokIcon} />
          <SocialLink link={"https://youtube.com"}  img={YouTubeIcon} />
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

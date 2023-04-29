import Typography from '../Typography';
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <nav>
        <ul>
          <li><a href="#"><Typography variant="futuraParagraphSmall" className='footer-link'>Terms & Conditions</Typography></a></li>
          <li><a href="#"><Typography variant="futuraParagraphSmall" className='footer-link'>Privacy Policy</Typography></a></li>
          <li><a href="#"><Typography variant="futuraParagraphSmall" className='footer-link'>Copyright of Mojo Crowe 2022</Typography></a></li>
        </ul>
    </nav>
    </div>
  );
}

export default Footer;

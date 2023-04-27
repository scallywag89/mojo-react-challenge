import Typography from '../Typography';
import './Header.css'
import logoUrl from '../../assets/logo.webp';
import NavBar from '../NavBar';

function Header() {
  return (
    <div className='header'>
      <img src={logoUrl} alt='mojo logo'/>
      <div>
        <NavBar/>
      </div>
    </div>
  );
}

export default Header;

import './Header.css'
import logoUrl from '../../assets/logo.webp';
import Chip from '../Chip/Chip';
import Typography from '../Typography/Typography';

function Header() {
  return (
    <div className='header'>
      <img src={logoUrl} alt='mojo logo'/>
      <div className='flex'>
        <Chip>
          <Typography variant="futuraHeadingSmall">
            Home
          </Typography>
        </Chip>
        <Chip variant='active'>
          <Typography variant="futuraHeadingSmall">
            Course
          </Typography>
        </Chip>
        <Chip>
          <Typography variant="futuraHeadingSmall">
            For Work
          </Typography>
        </Chip>
        <Chip>
          <Typography variant="futuraHeadingSmall">
            Merch
          </Typography>
        </Chip>
        <Chip>
          <Typography variant="futuraHeadingSmall">
            Contact Us
          </Typography>
        </Chip>
      </div>
    </div>
  );
}

export default Header;

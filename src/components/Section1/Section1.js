import Typography from '../Typography';
import bannerUrl from '../../assets/banner-img.webp'
import './Section1.css'
import Button from '../Button/Button';

function Section1() {
  return (
    <div className='section1'>
      <img src={bannerUrl} alt='The Mojo App with Ben Crowe, Dylan Alcott, and Stephanie Gilmore'/>
      <div className='section1-content'>
        <Typography>A SIMPLE APPROACH TO FIND HAPPINESS AND CONFIDENCE</Typography>
        <Typography>3 Questions and 3 Mindsets to change your life</Typography>
        <Button>WATCH NOW</Button>
      </div>
    </div>
  );
}

export default Section1;

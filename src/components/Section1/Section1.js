import Typography from '../Typography';
import bannerUrl from '../../assets/banner-img.webp'
import './Section1.css'
import Button from '../Button/Button';

function Section1() {
  return (
    <div className='section1'>
      <img src={bannerUrl} alt='The Mojo App with Ben Crowe, Dylan Alcott, and Stephanie Gilmore'/>
      <div className='section1-content'>
        <Typography variant="futuraHeadingLarge" className="margin-bottom-30">A SIMPLE APPROACH TO FIND HAPPINESS AND CONFIDENCE</Typography>
        <Typography variant="newYorkHeadingSmall" className="margin-bottom-30">3 Questions and 3 Mindsets to change your life</Typography>
        <Typography variant="futuraParagraphSmall">
          <Button variant="primary">START YOUR JOURNEY</Button>
        </Typography>
      </div>
    </div>
  );
}

export default Section1;

import Typography from '../Typography';
import mojoVidUrl from '../../assets/mojo-vid.mp4'
import './Section2.css'
import Button from '../Button/Button';

function Section2() {
  return (
    <div className='section2'>
      <video controls controlsList='nodownload'>
        <source src={mojoVidUrl} type='video/mp4' />
        <source src={mojoVidUrl} type='video/webm' />
      </video>
      <div className='section2-content'>
        <h1><Typography>WHY THE MOJO MINDSET COURSE & APP?</Typography></h1>
        <Typography>Why are there so many self help books,apps and programs about confidence and happiness, but people still feel stuck?</Typography>
        <Typography>Because it's complex and it takes work. The Mojo Course and App gives people a unique, simple and practical way to do that work</Typography>
        <Typography>We're not a mindfulness app. We go deeper by helping you figure out who you are, what you want and how to get there.</Typography>
        <Button>WATCH NOW</Button>
      </div>
    </div>
  );
}

export default Section2;

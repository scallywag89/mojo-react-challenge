import Typography from '../Typography';
import bannerUrl from '../../assets/banner-img.webp'
import Button from '../Button/Button'
import './Section3.css';

function Section3() {
  return (
    <div className='section3'>
      <div className='left-div'>
        <Typography variant="timberwolf28" className="margin-bottom-8">EXCLUSIVE VIDEOS FROM BEN & ATHLETES*</Typography>
        <Typography>Inspirational videos from athletes that have done this work before.</Typography>
        <img src={bannerUrl} alt='The Mojo App with Ben Crowe, Dylan Alcott, and Stephanie Gilmore'/>
      </div>
      <div className='right-div'>
        <div>
          <Typography variant="futuraParagraphMedium">The Mojo Course</Typography>
          <Typography variant="futuraParagraphMedium" className="margin-bottom-8">3 Chapters. 17 Excercises.</Typography>
          <Typography variant="futuraParagraphSmall" className="margin-bottom-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tellus id ante scelerisque pretium a non ex. Morbi fringilla.</Typography>
          <Typography variant="futuraParagraphSmall" className="margin-bottom-8">It's like having your own mindset coach in your pocket.</Typography>
          <Typography variant="futuraParagraphSmall" className="margin-bottom-8">Your investment in yourself is the same price as a coffee a week.</Typography>
          <Typography variant="futuraParagraphSmall" className="margin-bottom-8">$240 to unlock the full course, including a free 12-month Mojo membership.</Typography>
          <Typography variant="futuraParagraphSmall" className="margin-bottom-8">The cost of a membership is $15 per month thereafter.</Typography>
          <Typography variant="futuraParagraphSmall" className="margin-bottom-8">The membership includes:</Typography>
          <ul>
            <li><Typography variant="futuraParagraphSmall">Full access to the Mojo Mindset Course</Typography></li>
            <li><Typography variant="futuraParagraphSmall">Access to all the premium content in the library</Typography></li>
            <li><Typography variant="futuraParagraphSmall">Members masterclasses with Ben Crowe</Typography></li>
          </ul>
          <Button variant="primary">
            <Typography variant="futuraParagraphSmall">
              START YOUR JOURNEY
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Section3;

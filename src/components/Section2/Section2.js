import Typography from '../Typography';
import mojoVidUrl from '../../assets/mojo-vid.mp4';
import './Section2.css';
import Button from '../Button/Button';
import Card from '../Card/Card';

function Section2() {
  return (
    <div>
      <div className='section2'>
        <video controls controlsList='nodownload'>
          <source src={mojoVidUrl} type='video/mp4' />
          <source src={mojoVidUrl} type='video/webm' />
        </video>
        <div className='section2-content'>
          <Typography variant="futuraHeadingLarge" className="margin-bottom-30">WHY THE MOJO MINDSET COURSE & APP?</Typography>
          <Typography variant="futuraParagraphSmall" className="margin-bottom-8">Why are there so many self help books,apps and programs about confidence and happiness, but people still feel stuck?</Typography>
          <Typography variant="futuraParagraphSmall" className="margin-bottom-8">Because it's complex and it takes work. The Mojo Course and App gives people a unique, simple and practical way to do that work</Typography>
          <Typography variant="futuraParagraphSmall" className="margin-bottom-30">We're not a mindfulness app. We go deeper by helping you figure out who you are, what you want and how to get there.</Typography>
          <Typography variant="futuraParagraphSmall">
            <Button variant="primary">WATCH NOW</Button>
          </Typography>
        </div>
      </div>
      <div className="section2-highlight-text">
        <Typography variant="newYorkHeadingSmall" className="margin-bottom-30">"It changed the way that I live. It changed the way that I saw the world. And it changed the way that I saw myself."</Typography>
        <Typography variant="timberwolf28" className="margin-bottom-30">- Ash Barty</Typography>
      </div>
      <div className="section2-highlight-text">
        <Typography variant="futuraParagraphMedium" className="margin-bottom-8">Mojo's mindset course introduces you to the practice of 3 distinct mindsets: Connection, Purpose & Performance</Typography>
        <Typography variant="futuraParagraphSmall">And these mindsets ultimately help you answer 3 simple but not so easy questions:</Typography>
      </div>
      <div className='card-container'>
        <Card
          imgUrl="https://source.unsplash.com/random/300x300/?adventure"
          title="Chapter 1"
          subtitle="Who Am I?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tellus id ante scelerisque pretium a non ex. Morbi fringilla."
        />
        <Card
          imgUrl="https://source.unsplash.com/random/300x300/?adventure"
          title="Chapter 2"
          subtitle="What Do I Want?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tellus id ante scelerisque pretium a non ex. Morbi fringilla."
        />
        <Card
          imgUrl="https://source.unsplash.com/random/300x300/?adventure"
          title="Chapter 3"
          subtitle="How Do I Get There?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tellus id ante scelerisque pretium a non ex. Morbi fringilla."
        />
      </div>
    </div>
  );
}

export default Section2;

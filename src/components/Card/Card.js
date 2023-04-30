import Typography from '../Typography';
import './Card.css'

function Card(props) {
  return (
    <div className="card">
      <img src={props.imgUrl} alt={props.title} className='margin-bottom-8'/>
      <Typography variant="newYorkHeadingXSmall" className='light-gray'>{props.title}</Typography>
      <Typography variant="newYorkHeadingSmall">{props.subtitle}</Typography>
      <ul>
        <li><Typography variant="futuraParagraphSmall" className='light-gray'>{props.description}</Typography></li>
        <li><Typography variant="futuraParagraphSmall" className='light-gray'>{props.description}</Typography></li>
        <li><Typography variant="futuraParagraphSmall" className='light-gray'>{props.description}</Typography></li>
      </ul>
    </div>
  );
}

export default Card;

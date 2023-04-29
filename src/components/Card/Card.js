import Typography from '../Typography';
import './Card.css'

function Card(props) {
  return (
    <div className="card">
      <img src={props.imgUrl} alt={props.title} className='margin-bottom-8'/>
      <Typography className="newYorkHeadingXSmall">{props.title}</Typography>
      <Typography className="futuraParagraphMedium">{props.subtitle}</Typography>
      <ul>
        <li><Typography className="futuraParagraphSmall">{props.description}</Typography></li>
        <li><Typography className="futuraParagraphSmall">{props.description}</Typography></li>
        <li><Typography className="futuraParagraphSmall">{props.description}</Typography></li>
      </ul>
    </div>
  );
}

export default Card;

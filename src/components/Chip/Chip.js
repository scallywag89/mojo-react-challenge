import './Chip.css'

function Chip(props) {
  const { variant } = props;
  return (
    <button className={`Chip ${variant}`}>
      {props.children}
    </button>
  );
}

export default Chip;

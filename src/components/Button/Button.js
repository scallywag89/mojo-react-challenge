import './Button.css'

function Button(props) {
  const { variant } = props;
  return (
    <button className={`Button ${variant}`}>
      {props.children}
    </button>
  );
}

export default Button;

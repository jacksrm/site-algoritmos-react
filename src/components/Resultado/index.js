import './styles.css';

export default function Resultado(props) {
  return (
    <div className={`resultado ${props.disabled ? 'disabled' : ''}`}>
      {props.children}
    </div>
  );
}

export default function Greetings(props) {
  let word = '';
  switch (props.lang) {
    case 'de':
      word = `Hallo ${props.children}`;
      break;
    case 'fr':
      word = `Bonjour ${props.children}`;
      break;
    case 'es':
      word = `Hola ${props.children}`;
      break;
    case 'en':
      word = `Hello ${props.children}`;
      break;
      default:
      word = `Hello ${props.children}`;
  }

  return (
    <div className="greeting-box">
      <p className="greeting-text">{word}</p>
      <br />
    </div>
  );
}

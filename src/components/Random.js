

export default function Random({min, max}) {
  return (
    <div className="greeting-box">
      <p className="greeting-text"> Random value between 1 and 6 => {Math.round(Math.random()*(max-min)+min)} </p>
      <br />
    </div>
  )
}

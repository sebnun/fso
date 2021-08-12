import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <div>
        <Button name="Good" handleClick={() => setGood(good + 1)} />
        <Button name="Neutral" handleClick={() => setNeutral(neutral + 1)} />
        <Button name="Bad" handleClick={() => setBad(bad + 1)} />
      </div>
      <Stats good={good} bad={bad} neutral={neutral} />
    </>
  )
}

const Button = ({ handleClick, name }) => {
  return <input type="submit" onClick={() => handleClick()} value={name} />
}

const Stats = ({ good, bad, neutral }) => {
  if (!good && !bad && !neutral) return null

  return <table><tbody>
    <tr><StatsLine title="Good" value={good} /></tr>
    <tr><StatsLine title="Neutral" value={neutral} /></tr>
    <tr><StatsLine title="Bad" value={bad} /></tr>
    <tr><StatsLine title="All" value={bad + neutral + good} /></tr>
    <tr><StatsLine title="Average" value={(bad + neutral + good) / 3} /></tr>
    <tr><StatsLine title="Positive" value={`${(good * 100) / (bad + neutral + good)} %`} /></tr>
  </tbody></table>
}

const StatsLine = ({ title, value }) => {
  return <><td>{title}</td><td>{value}</td></>
}

export default App
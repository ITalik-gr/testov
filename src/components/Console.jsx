

function Console({logs}) {
  const reversedLogs = logs.slice().reverse();
  return (
    <div className='console'>
      {reversedLogs.map(log => (
        <div className="console-item">
          {log}
        </div>
      ))}
    </div>
  )
}

export default Console


function Square({rowIndex, colIndex, isActive, onMouseEnter}) {

  return (
    <div data-row={rowIndex} data-col={colIndex} className={`square ${isActive ? 'square-active' : ''}`}
    onMouseEnter={() => onMouseEnter(rowIndex, colIndex)}>

    </div>
  )
}

export default Square
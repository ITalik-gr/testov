'use client'

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react";
import Square from "./Square";
import Console from "./Console";

function Box() {

  const searchParams = useSearchParams()
  const [field, setField] = useState()
  const [activeBlocks, setActiveBlocks] = useState({});

  const [logs, setLogs] = useState([]);

  // Функція для додавання логу до стану
  const addLog = (log) => {
    setLogs([...logs, log]);
  };

  useEffect(() => {
    setField(searchParams.get('field') || 5)
    setActiveBlocks({})
    setLogs([])
  }, [searchParams.get('field')])

  // ховер курсора на блок
  const handleMouseEnter = (row, col) => {

    const isActive = activeBlocks[`${row}-${col}`];

    // р активним
    if (!isActive) {
      setActiveBlocks({ ...activeBlocks, [`${row}-${col}`]: true });
      addLog(`row ${row}, column ${col} active: true`);

    } else {
      const updatedActiveBlocks = { ...activeBlocks };
      delete updatedActiveBlocks[`${row}-${col}`];
      setActiveBlocks(updatedActiveBlocks);
      addLog(`row ${row}, column ${col} active: false`);
    }
  };


  // 
  const grid = Array.from({ length: field }, (_, rowIndex) => (
    <div className="grid-row" key={rowIndex}>
      {Array.from({ length: field }, (_, colIndex) => (
        <Square rowIndex={rowIndex + 1}
                colIndex={colIndex + 1} 
                key={`${rowIndex}-${colIndex}`}
                isActive={activeBlocks[`${rowIndex + 1}-${colIndex + 1}`]}
                onMouseEnter={handleMouseEnter} />
      ))}
    </div>
  ));

  return (
    <div className="wrapper">
      <div className="box">
        {grid}
      </div>

      <Console logs={logs} />
    </div>
  )
}

export default Box
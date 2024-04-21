'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation';

function Toggle({data}) {
  

  const router = useRouter();

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectChange = (event) => {
    const selectedItemIndex = event.target.value;
    setSelectedItem(data[selectedItemIndex]);
  };

  const handleButtonClick = () => {
    router.push(`?field=${selectedItem?.field || 5}`);
  };

  return (
    <div className="toggle-wrap">
      <select onChange={handleSelectChange}>
        <option value="">Оберіть елемент</option>
        {data?.map((item, index) => (
          <option key={item.id} value={index}>{item.name}</option>
        ))}
      </select>

      <button onClick={handleButtonClick}>Старт</button>
    </div>
  )
}

export default Toggle
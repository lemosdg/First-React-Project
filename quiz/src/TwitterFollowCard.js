import { useState } from 'react'

export function TwitterFollowCard() {  
  const [inputValue, setInputValue] = useState('');
  const [showValue, setShowValue] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowValue(inputValue === 'lugo'); // Realiza la comparación aquí
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
      </form>
      {showValue && <p>El valor coincide</p>}
    </div>
  )
}
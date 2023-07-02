import { useState } from 'react'

export function TwitterFollowCard() {  
  const equipo = [
    {nombre: 'lugo', logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8X_5ZQeRpoUjSzx7zxD90DlfpOMgtVZZldc2GgIOFMU9wGAbSR8ui&usqp=CAE&s'},
    {nombre: 'celta', logo:'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/800px-RC_Celta_de_Vigo_logo.svg.png'}
  ];

  const [inputValue, setInputValue] = useState('');
  const [showValue, setShowValue] = useState(false);
  const [arreglo, setArreglo] = useState(0);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowValue(inputValue === equipo[arreglo].nombre); 
  };

  const handleClick = () => {
    if (arreglo < equipo.length - 1) {
      setArreglo(arreglo + 1);
      setInputValue('');
    }
  };

  return (
    <article>
      <img className='logo' src={equipo[arreglo].logo} alt='equipo'/>
      <section>
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleChange} />
        </form>
        {showValue && <p>El valor coincide</p>}
      </section>
      <button className='next' onClick={handleClick}>
        <img className='flecha' src='../img/proximo.png' alt='next' />
      </button>
    </article>
  )
}
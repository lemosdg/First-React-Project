import { useState } from 'react'

export function TwitterFollowCard() {  
  const equipo = [
    {nombre: 'lugo', logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8X_5ZQeRpoUjSzx7zxD90DlfpOMgtVZZldc2GgIOFMU9wGAbSR8ui&usqp=CAE&s'},
    {nombre: 'celta', logo:'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/800px-RC_Celta_de_Vigo_logo.svg.png'}
  ];

  const [inputValue, setInputValue] = useState('');
  const [showValue, setShowValue] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowValue(inputValue === equipo[0].nombre); 
  };

  return (
    <article>
      <img src={equipo[0].logo} alt='equipo'/>
      <section>
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleChange} />
        </form>
        {showValue && <p>El valor coincide</p>}
      </section>
    </article>
  )
}
import React, {useEffect, useState} from 'react';

export default props => {
  // const contador = 3;

  // Hooks te o ponteiro do state e o callback para altera-lo, passando um value default
  const [contador, setContador] = useState(100);
  const [parOuImpar, setParOuImpar] = useState('Par');

  useEffect(() => {
    setParOuImpar(contador % 2 === 0 ? 'Par' : 'Impar');
  });

  return (
    <div>
      <h1>{contador}</h1>
      <h2>{parOuImpar}</h2>
      <button onClick={() => setContador(contador + 1)}>Inc</button>
    </div>
  );
}

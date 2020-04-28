import React from 'react';

/*export*/
const CompA = (props) => <h2>Primeiro Diz: {props.valor}</h2>;
/*export*/
const CompB = (props) => <h2>Segundo Diz: {props.valor}</h2>;

export {CompA, CompB};
export default CompA;

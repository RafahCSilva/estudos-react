import Navegador from '../componentes/Navegador'

export default function Inicio () {
  return (
    <div style={ {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100hv',
    } }>
      <Navegador destino="/estiloso" texto="Estiloso" />
      <Navegador destino="/exemplo" texto="Exemplo" />
      <Navegador destino="/jsx" texto="Jsx" cor={ 'green' } />

      {/*<h1>Fundamentos de Next.js & React</h1>*/ }
      {/*<h2>Vamos estudar esse framework</h2>*/ }
      {/*<Link href="/estiloso">Estiloso</Link>*/ }
    </div>
  )
}

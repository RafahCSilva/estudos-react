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
      <Navegador destino="/exemplo" texto="Exemplo" cor={'#940030'}/>
      <Navegador destino="/jsx" texto="Jsx" cor={ 'red' } />
      <Navegador destino="/navegacao" texto="Navegação #01" cor={ 'green' } />
      <Navegador destino="/cliente/sp/123" texto="Navegação #02" cor={ 'blue' } />
      <Navegador destino="/estado" texto="Componente com Estado" cor={ 'pink' } />

      {/*<h1>Fundamentos de Next.js & React</h1>*/ }
      {/*<h2>Vamos estudar esse framework</h2>*/ }
      {/*<Link href="/estiloso">Estiloso</Link>*/ }
    </div>
  )
}

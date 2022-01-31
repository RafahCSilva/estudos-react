export default function Inicio () {
  const titulo = <h1>Fundamentos de Next.js & React</h1>
  const subtitulo = () => <h2>Vamos estudar esse framework</h2>
  return (
    <div>
      { titulo }
      { subtitulo() }
    </div>
  )
}

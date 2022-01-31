import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../componentes/Layout'

export default function Estiloso () {
  return (
    <Layout titulo="Exemplo de CSS Modularizado">
      <div className={ styles.roxo }>
        <Link href="/">voltar</Link>
        <h1>Estilo usando CSS Módulos</h1>
      </div>
    </Layout>
  )
}

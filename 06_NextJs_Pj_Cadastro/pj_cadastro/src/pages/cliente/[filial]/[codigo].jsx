import Layout from '../../../componentes/Layout'
import { useRouter } from 'next/router'

export default function ClienteProCodigo () {
  const router = useRouter()

  return (
    <Layout titulo={ 'Navegação Dinâmica' }>
      <div>filial = { router.query.filial }</div>
      <div>código = { router.query.codigo }</div>
    </Layout>
  )
}

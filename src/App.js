import RouterConfig from 'navigation'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import 'styles/main.scss'
import 'react-data-grid/lib/styles.css'

function App() {
  const { ready } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/auth/signin')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!ready) {
    return <div />
  }
  return <RouterConfig />
}

export default App

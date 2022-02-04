import { Link, useLocation } from 'react-router-dom'

import './styles.scss'

export default function Header() {
  const location = useLocation()
  return (
    <header>
      <div className="container-header">
        <Link style={{ color: location.pathname === '/' ? '#EAEEB2' : '' }} to={'/'}>INÍCIO</Link>
        <Link style={{ color: location.pathname === '/agents' ? '#EAEEB2' : '' }} to={'/agents'}>AGENTES</Link>
        <Link style={{ color: location.pathname === '/collections' ? '#EAEEB2' : '' }} to={'/collections'}>COLEÇÃO</Link>
        <Link to={'/'}>LOJA</Link>
      </div>
    </header>
  );
}

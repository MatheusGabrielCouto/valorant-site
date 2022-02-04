import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';

import Agent from '../../interfaces/Agent';
import Mode from '../../interfaces/Mode';

import './styles.scss'

export default function Home() {
  const [agent, setAgent] = useState<Agent | undefined>()
  const [mode, setMode] = useState<Mode | undefined>()

  useEffect(() => {
    getAgent()
    getMode()
  }, [])

  function getAgent() {
    api.get('agents/bb2a4828-46eb-8cd1-e765-15848195d751').then(resp => {
      console.log(resp.data.data)
      setAgent(resp.data.data)
    }).catch(err => {
      console.log(err)
    })
  }

  function getMode() {
    api.get('gamemodes/a4ed6518-4741-6dcb-35bd-f884aecdc859?language=pt-BR').then(resp => {
      console.log(resp.data.data)
      setMode(resp.data.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className='container'>
      <Header />
      <section>
        <div style={{ backgroundImage: `url(${agent?.bustPortrait})` }} className="agent">
          <div>
            <h1>{agent?.displayName}</h1>
            <p>novo agente</p>
          </div>
        </div>
        <div className="gamemode">
          <h2>modos em destaque</h2>
          <div className='mode'>
            <img src={mode?.displayIcon} alt="" />
            <h3>{mode?.displayName}</h3>
            <p>{mode?.duration}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

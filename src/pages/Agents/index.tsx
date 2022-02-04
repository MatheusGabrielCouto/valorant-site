import { useEffect, useState } from 'react';
import api from '../../services/api';

import Agent from '../../interfaces/Agent';

import './styles.scss'
import Header from '../../components/Header';



export default function Agents() {
  const [agents, setAgents] = useState([])
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>()
  const [habilite, setHabilite] = useState('info')
  const [habiliteSelected, setHabiliteSelected] = useState<Habilite | null>()

  interface Habilite {
    slot: string,
    description: string,
    displayName: string,
    info: string
  }

  useEffect(() => {
    getAgents()
  }, [])

  function getAgents() {
    api.get('/agents?language=pt-BR&isPlayableCharacter=true').then(resp => {
      setAgents(resp.data.data)
    }).catch(error => {
      console.log(error)
    })
  }

  function returnKey(slot: string) {
    if (slot === "Ability1") {
      return 'q'
    } else if (slot === 'Ability2') {
      return 'e'
    } else if (slot === "Grenade") {
      return 'c'
    } else if (slot === "Ultimate") {
      return 'x'
    }
  }

  function selectHabilite(abilite: {
    slot: string,
    description: string,
    displayName: string,
    info: string
  }) {
    setHabiliteSelected(abilite)
    setHabilite(abilite.slot)
  }

  return (
    <div className='agents-container'>
      <Header />
      <section>
        <img className='agent-image-full' src={selectedAgent?.bustPortrait} alt="" />

        {
          selectedAgent ?
            <div className='agent-info-container'>
              <h3>{selectedAgent.role.displayName}</h3>
              <h2 className='title'>{selectedAgent.displayName}</h2>
              <div className='agent-info-habilites'>
                <div onClick={() => {
                  selectHabilite({
                    slot: 'info',
                    description: selectedAgent.role.description,
                    displayName: selectedAgent.role.displayName,
                    info: selectedAgent.description
                  })
                }} style={{ backgroundColor: habilite === 'info' ? '#aaaaaa63' : '' }} className='habilite-button'>
                  <p>INFO</p>
                  <div className="line"></div>
                  <img src={selectedAgent.role.displayIcon} alt="" />
                </div>
                {
                  selectedAgent.abilities.map((abilite) => (
                    <div onClick={() => {
                      selectHabilite({ ...abilite, info: selectedAgent.description })
                    }} key={abilite.slot} style={{ backgroundColor: habilite === abilite.slot ? '#aaaaaa63' : '', display: abilite.slot !== 'Passive' ? 'flex' : 'none' }} className='habilite-button'>
                      <p>{returnKey(abilite.slot)}</p>
                      <div className="line"></div>
                      <img src={abilite.displayIcon} alt="" />
                    </div>
                  ))
                }
              </div>
              {
                habilite === 'info' ?
                  <div className='desc-abilite'>
                    <p className='desc-agent'>{habiliteSelected?.info}</p>
                    <h2>{habiliteSelected?.displayName}</h2>
                    <p>{habiliteSelected?.description}</p>
                  </div>
                  :
                  <div className='desc-abilite'>
                    <h2>{habiliteSelected?.displayName}</h2>
                    <p>{habiliteSelected?.description}</p>
                  </div>
              }
            </div>
            : ''
        }
        <footer>
          <div className='list-agets'>
            {
              agents?.map((agent: Agent) => (
                <div key={agent.uuid} onClick={() => {
                  setSelectedAgent(agent)
                  const data = {
                    slot: 'info',
                    description: agent.role.description,
                    displayName: agent.role.displayName,
                    info: agent.description
                  }
                  setHabiliteSelected(data)
                }}
                  style={{
                    backgroundImage: `url(${agent.displayIcon})`,
                    backgroundColor: selectedAgent?.uuid === agent.uuid ? '#81ccba44' : '',
                    borderColor: selectedAgent?.uuid === agent.uuid ? '#81CCBA' : ''
                  }}
                  className="agent-card">
                </div>
              ))
            }
          </div>
        </footer>
      </section >
      <audio src={selectedAgent?.voiceLine.mediaList[0].wave} autoPlay></audio>
    </div >
  );
}

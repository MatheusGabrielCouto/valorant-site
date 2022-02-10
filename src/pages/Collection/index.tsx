import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Weapon from '../../interfaces/Weapon';
import api from '../../services/api';

import './styles.scss'

export default function Collection() {
  const [rifles, setRifles] = useState([])
  const [loading, setLoading] = useState(false)
  const [shotgun, setShotgun] = useState([])
  const [heavy, setHeavy] = useState([])
  const [sidearm, setSidearm] = useState([])
  const [sniper, setSniper] = useState([])
  const [smg, setSmg] = useState([])
  const [melee, setMelee] = useState([])

  useEffect(() => {
    getAllWeapons()
  }, [])

  function getAllWeapons() {
    setLoading(true)
    api.get('weapons?language=pt-BR').then(resp => {
      filterWeapons(resp.data.data)
    }).catch(err => {
      console.log(err.data)
    })
  }

  async function filterWeapons(weapons: any) {
    setHeavy(await weapons.filter((weapon: Weapon) => (
      weapon.category === 'EEquippableCategory::Heavy'
    )))
    setRifles(await weapons.filter((weapon: Weapon) => (
      weapon.category === 'EEquippableCategory::Rifle'
    )))

    setShotgun(await weapons.filter((weapon: Weapon) => (
      weapon.category === 'EEquippableCategory::Shotgun'
    )))

    setSidearm(await weapons.filter((weapon: Weapon) => (
      weapon.category === 'EEquippableCategory::Sidearm'
    )))

    setSniper(await weapons.filter((weapon: Weapon) => (
      weapon.category === 'EEquippableCategory::Sniper'
    )))

    setSmg(await weapons.filter((weapon: Weapon) => (
      weapon.category === 'EEquippableCategory::SMG'
    )))

    setMelee(await weapons.filter((weapon: Weapon) => (
      weapon.category === 'EEquippableCategory::Melee'
    )))
    setLoading(false)
  }

  console.log(loading)

  return (
    <div className='agents-container'>
      <Header />
      <section className='weapons-container'>
        <div className='collum'>
          <h1>Armas leves</h1>
          {
            sidearm.map((weapon: Weapon) => (
              <div className='weapon' >
                <div className="image" style={{ backgroundImage: `url(${weapon.displayIcon})` }} />
                <div className='weapon-title'>
                  <p>{weapon.displayName}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className='collum'>
          <div>
            <h1>Submetralhadoras</h1>
            {
              smg.map((weapon: Weapon) => (
                <div className='weapon' >
                  <div className="image" style={{ backgroundImage: `url(${weapon.displayIcon})` }} />
                  <div className='weapon-title'>
                    <p>{weapon.displayName}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div>
            <h1>Escopetas</h1>
            {
              shotgun.map((weapon: Weapon) => (
                <div className='weapon' >
                  <div className="image" style={{ backgroundImage: `url(${weapon.displayIcon})` }} />
                  <div className='weapon-title'>
                    <p>{weapon.displayName}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='collum'>
          <h1>Fuzis</h1>
          {
            rifles.map((weapon: Weapon) => (
              <div className='weapon' >
                <div className="image" style={{ backgroundImage: `url(${weapon.displayIcon})` }} />
                <div className='weapon-title'>
                  <p>{weapon.displayName}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className='collum'>
          <div>
            <h1>Fuzis de precisão</h1>
            {
              sniper.map((weapon: Weapon) => (
                <div className='weapon' >
                  <div className="image" style={{ backgroundImage: `url(${weapon.displayIcon})` }} />
                  <div className='weapon-title'>
                    <p>{weapon.displayName}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div>
            <h1>Metralhadoras</h1>
            {
              heavy.map((weapon: Weapon) => (
                <div className='weapon' >
                  <div className="image" style={{ backgroundImage: `url(${weapon.displayIcon})` }} />
                  <div className='weapon-title'>
                    <p>{weapon.displayName}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}

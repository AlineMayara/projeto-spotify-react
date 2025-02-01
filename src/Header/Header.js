import { useState } from 'react'

import './Header.css'

import SmallLeft from '../assets/icons/small-left.png'
import SmallRight from '../assets/icons/small-right.png'
import SearchIcon from '../assets/icons/search.png'

import { requestApi } from '../api'

function Header({ onSearchResult }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = value => {
    setSearchTerm(value)

    if (value) {
      requestApi(value).then(onSearchResult)
    } else {
      onSearchResult([])
    }
  }

  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={SmallLeft} alt="Seta esquerda" />
        </button>
        <button className="arrow-right">
          <img src={SmallRight} alt="Seta direita" />
        </button>
      </div>
      <div className="header__search">
        <img src={SearchIcon} alt="" />
        <input
          id="search-input"
          type="text"
          maxlength="800"
          placeholder="O que você quer ouvir?"
          value={searchTerm}
          onChange={e => handleSearch(e.target.value)}
        />
      </div>
      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  )
}
export default Header

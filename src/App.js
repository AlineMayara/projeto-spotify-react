import { useState } from 'react'

import logo from './logo.svg'

import './styles/main-content.css'
import './styles/media-queries.css'
import './styles/reset.css'
import './styles/sidebar-footer.css'
import './styles/vars.css'

import Header from './Header/Header'
import ResultPlaylists from './ResultPlaylists/ResultPlaylists'
import Footer from './Footer/Footer'
import ResultArtist from './ResultArtist/ResultArtist'

import LogoSpotify from './assets/icons/logo-spotify.png'

function App() {
  const [results, setResults] = useState([])

  return (
    <div className="App">
      <div className="sidebar">
        <nav className="sidebar__navigation">
          <div className="logo">
            <a href="">
              <img src={LogoSpotify} alt="Logo" />
            </a>
          </div>

          <ul>
            <li>
              <a href="">
                <span className="fa fa-home"></span>
                <span>Início</span>
              </a>
            </li>

            <li>
              <a href="">
                <span className="fa fa-search"></span>
                <span>Buscar</span>
              </a>
            </li>
          </ul>

          <div id="dividir"></div>

          <ul>
            <li>
              <a href="">
                <span className="fa fa-book"></span>
                <span>Sua Biblioteca</span>
              </a>
            </li>

            <li>
              <a href="">
                <span className="fa fa-plus"></span>
                <span>Nova Playlist</span>
              </a>
            </li>
          </ul>

          <div className="links">
            <a href=""> Legal</a>

            <a href=""> Centro de Privacidade</a>

            <a href=""> Sobre anúncios</a>

            <a href=""> Cookies</a>
          </div>

          <ul>
            <li className="identificador">
              <a href="">
                <span className="fa fa-globe"></span>
                <span>Português Brasil</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        <div className="main-container">
          <Header onSearchResult={setResults} />
          <div className="playlist-container">
            {results.length === 0 && <ResultPlaylists />}
            {results.length > 0 && <ResultArtist results={results} />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App

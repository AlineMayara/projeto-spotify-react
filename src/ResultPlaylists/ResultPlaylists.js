import './ResultPlaylists.css'

import Playlist1Icon from '../assets/playlist/1.jpeg'
import Playlist2Icon from '../assets/playlist/2.png'
import Playlist3Icon from '../assets/playlist/3.jpeg'
import Playlist4Icon from '../assets/playlist/4.jpeg'
import Playlist5Icon from '../assets/playlist/5.jpeg'
import Playlist6Icon from '../assets/playlist/6.jpeg'
import Playlist7Icon from '../assets/playlist/7.jpeg'
import Playlist8Icon from '../assets/playlist/8.jpeg'
import Playlist9Icon from '../assets/playlist/9.jpeg'
import Playlist10Icon from '../assets/playlist/10.jpeg'
import Playlist11Icon from '../assets/playlist/11.jpeg'
import Playlist12Icon from '../assets/playlist/12.jpeg'
import Playlist13Icon from '../assets/playlist/13.jpeg'
import Playlist14Icon from '../assets/playlist/14.jpeg'
import Playlist15Icon from '../assets/playlist/15.jpeg'

const albums = [
  { img: Playlist1Icon, title: 'Boas festas' },
  { img: Playlist2Icon, title: 'Feitos para vocé' },
  { img: Playlist3Icon, title: 'Rap' },
  { img: Playlist4Icon, title: 'Pop' },
  { img: Playlist5Icon, title: 'Rock' },
  { img: Playlist6Icon, title: 'Podcasts' },
  { img: Playlist7Icon, title: 'Sertanejo' },
  { img: Playlist8Icon, title: 'Samba e pagode' },
  { img: Playlist9Icon, title: 'Funk' },
  { img: Playlist10Icon, title: 'Pagode' },
  { img: Playlist11Icon, title: 'Rock' },
  { img: Playlist12Icon, title: 'Hip Hop' },
  { img: Playlist13Icon, title: 'Indie' },
  { img: Playlist14Icon, title: 'Relax' },
  { img: Playlist15Icon, title: 'Relax' }
]

function ResultPlaylists() {
  return (
    <div id="result-playlists">
      <div className="playlist">
        <h1 id="greeting">Bora Galera!</h1>
        <h2 className="session">
          Estão prontos para embarcar nessa aventura,
          <br />e navegar por todas as seções.
        </h2>
      </div>

      <div className="offer__scroll-container">
        <div className="offer__list">
          <section className="offer__list-item">
            {albums.map((album, index) => (
              <a href="" className="cards card" key={index}>
                <div className="cards">
                  <img src={album.img} alt="" />
                  <span>{album.title}</span>
                </div>
              </a>
            ))}
          </section>
        </div>
        <div className="separator"></div>
        <div className="content">© 2025 Spotify AB</div>
      </div>
    </div>
  )
}

export default ResultPlaylists

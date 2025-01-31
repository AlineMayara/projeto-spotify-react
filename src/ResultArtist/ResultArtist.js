import './ResultArtist.css'

function ResultArtist() {
  return (
    <div id="result-artist" className="hidden">
      <div id="search-container" className="grid-container">
        <div class="card-img">
          <img className="artist-img" src="" />
          <div className="play">
            <span className="fa fa-solid fa-play"></span>
          </div>
        </div>
        <div className="card-text">
          <a title="Foo Fighters" className="vst" href="">
            <span className="artist-name">nome artista</span>
            <span className="artist-categorie">Artista</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ResultArtist

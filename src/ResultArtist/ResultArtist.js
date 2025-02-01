import './ResultArtist.css'

function ResultArtist({ results }) {
  return (
    <div id="result-artist">
      <div id="search-container" className="grid-container">
        {results.map((artist, index) => (
          <div key={index} className="artist-card">
            <div className="card-img">
              <img className="artist-img" src={artist.urlImg} />
              <div className="play">
                <span className="fa fa-solid fa-play"></span>
              </div>
            </div>
            <div className="card-text">
              <a title={artist.name} className="vst" href="">
                <span className="artist-name">{artist.name}</span>
                <span className="artist-categorie">{artist.genre}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultArtist

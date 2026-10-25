function AnimeCard({ anime, onDelete }) {
  const { id, judul, tipe, episode, status, studio, genre, skor, sinopsis, gambar } = anime;

  return (
    <article className="anime-card">
      <div className="anime-card-media">
        <img
          src={gambar || '/OnePiece.webp'}
          alt={`Poster ${judul}`}
          className="anime-poster"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/OnePiece.webp';
          }}
        />
      </div>

      <div className="anime-card-content">
        <div className="anime-header-row">
          <h3 className="anime-title">{judul}</h3>
          <span className="anime-score-badge">Skor: {skor}</span>
        </div>

        <div className="anime-meta-list">
          <div className="meta-item">
            <strong>Tipe:</strong> <span>{tipe || 'TV'}</span>
          </div>
          <div className="meta-item">
            <strong>Episode:</strong> <span>{episode || '-'}</span>
          </div>
          <div className="meta-item">
            <strong>Status:</strong> <span>{status || '-'}</span>
          </div>
          <div className="meta-item">
            <strong>Studio:</strong> <span>{studio || '-'}</span>
          </div>
          <div className="meta-item">
            <strong>Genre:</strong> <span>{genre || '-'}</span>
          </div>
        </div>

        <div className="anime-synopsis-box">
          <strong>Sinopsis:</strong>
          <p>{sinopsis || 'Tidak ada sinopsis yang tersedia.'}</p>
        </div>

        <div className="anime-card-footer">
          <button
            type="button"
            className="btn-delete"
            onClick={() => onDelete(id)}
          >
            Hapus Anime
          </button>
        </div>
      </div>
    </article>
  );
}

export default AnimeCard;

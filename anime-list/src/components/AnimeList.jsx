import AnimeCard from './AnimeCard';

function AnimeList({ animeList, onDelete, onReset }) {
  return (
    <section className="anime-list-section">
      <div className="list-header-row">
        <div>
          <h2>Daftar Koleksi Anime</h2>
          <p className="list-subtitle">
            Menampilkan {animeList.length} anime dalam katalog Anda
          </p>
        </div>
        {animeList.length === 0 && (
          <button type="button" className="btn-secondary" onClick={onReset}>
            Pulihkan Data Sampel
          </button>
        )}
      </div>

      {animeList.length === 0 ? (
        <div className="empty-state-box">
          <h3 className="empty-title">Belum ada data anime</h3>
          <p className="empty-desc">
            Daftar saat ini masih kosong. Silakan gunakan form &quot;Tambah Anime Baru&quot; di atas untuk memasukkan data baru.
          </p>
        </div>
      ) : (
        <div className="anime-cards-grid">
          {animeList.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} onDelete={onDelete} />
          ))}
        </div>
      )}
    </section>
  );
}

export default AnimeList;

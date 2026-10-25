import { useState } from 'react';

function AnimeForm({ onAddAnime }) {
  const [formData, setFormData] = useState({
    judul: '',
    tipe: 'TV',
    episode: '',
    status: 'Sedang Tayang (Ongoing)',
    studio: '',
    genre: 'Action',
    skor: '8.00',
    sinopsis: '',
    gambar: '/OnePiece.webp'
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (error && name === 'judul') {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.judul.trim()) {
      setError('Nama judul anime wajib diisi!');
      return;
    }

    const newAnime = {
      id: Date.now(),
      judul: formData.judul.trim(),
      tipe: formData.tipe,
      episode: formData.episode.trim() || '1',
      status: formData.status,
      studio: formData.studio.trim() || 'Studio Independen',
      genre: formData.genre.trim() || 'Action',
      skor: parseFloat(formData.skor) || 8.0,
      sinopsis: formData.sinopsis.trim() || 'Belum ada sinopsis untuk anime ini.',
      gambar: formData.gambar || '/OnePiece.webp'
    };

    onAddAnime(newAnime);

    setFormData({
      judul: '',
      tipe: 'TV',
      episode: '',
      status: 'Sedang Tayang (Ongoing)',
      studio: '',
      genre: 'Action',
      skor: '8.00',
      sinopsis: '',
      gambar: '/OnePiece.webp'
    });
    setError('');
  };

  return (
    <section className="form-section">
      <div className="section-header">
        <h2>Tambah Anime Baru</h2>
        <p>Gunakan form di bawah ini untuk menambahkan entitas anime baru ke daftar.</p>
      </div>

      <form className="anime-form" onSubmit={handleSubmit}>
        {error && <div className="form-error-alert">{error}</div>}

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="form-judul">
              Judul Anime <span className="required">*</span>
            </label>
            <input
              type="text"
              id="form-judul"
              name="judul"
              value={formData.judul}
              onChange={handleChange}
              placeholder="Contoh: Demon Slayer: Kimetsu no Yaiba"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="form-tipe">Tipe</label>
            <select
              id="form-tipe"
              name="tipe"
              value={formData.tipe}
              onChange={handleChange}
            >
              <option value="TV">TV</option>
              <option value="Movie">Movie</option>
              <option value="OVA">OVA</option>
              <option value="ONA">ONA</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="form-episode">Jumlah Episode</label>
            <input
              type="text"
              id="form-episode"
              name="episode"
              value={formData.episode}
              onChange={handleChange}
              placeholder="Contoh: 12 atau 24 atau 1000+"
            />
          </div>

          <div className="form-group">
            <label htmlFor="form-status">Status Penayangan</label>
            <select
              id="form-status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Sedang Tayang (Ongoing)">Sedang Tayang (Ongoing)</option>
              <option value="Selesai Tayang (Finished Airing)">Selesai Tayang (Finished Airing)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="form-studio">Studio Produksi</label>
            <input
              type="text"
              id="form-studio"
              name="studio"
              value={formData.studio}
              onChange={handleChange}
              placeholder="Contoh: ufotable / MAPPA"
            />
          </div>

          <div className="form-group">
            <label htmlFor="form-genre">Genre</label>
            <input
              type="text"
              id="form-genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              placeholder="Contoh: Action, Fantasy, Shounen"
            />
          </div>

          <div className="form-group">
            <label htmlFor="form-skor">Skor / Rating (0 - 10)</label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="10"
              id="form-skor"
              name="skor"
              value={formData.skor}
              onChange={handleChange}
              placeholder="Contoh: 8.75"
            />
          </div>

          <div className="form-group">
            <label htmlFor="form-gambar">Pilih Poster Sampel / URL</label>
            <select
              id="form-gambar"
              name="gambar"
              value={formData.gambar}
              onChange={handleChange}
            >
              <option value="/OnePiece.webp">Poster One Piece</option>
              <option value="/attackontitan.webp">Poster Attack on Titan</option>
              <option value="/jujutsukaisen.webp">Poster Jujutsu Kaisen</option>
              <option value="/Naruto.webp">Poster Naruto</option>
            </select>
          </div>
        </div>

        <div className="form-group form-group-full">
          <label htmlFor="form-sinopsis">Sinopsis Singkat</label>
          <textarea
            id="form-sinopsis"
            name="sinopsis"
            rows="3"
            value={formData.sinopsis}
            onChange={handleChange}
            placeholder="Tulis ringkasan atau sinopsis anime di sini..."
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            + Tambah Anime
          </button>
        </div>
      </form>
    </section>
  );
}

export default AnimeForm;

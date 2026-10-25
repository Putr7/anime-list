function AnimeSummary({ animeList }) {
  const totalAnime = animeList.length;
  const ongoingCount = animeList.filter((a) =>
    a.status.toLowerCase().includes('ongoing') || a.status.toLowerCase().includes('sedang tayang')
  ).length;
  const finishedCount = animeList.filter((a) =>
    a.status.toLowerCase().includes('finished') || a.status.toLowerCase().includes('selesai')
  ).length;
  const avgScore =
    totalAnime > 0
      ? (
          animeList.reduce((acc, curr) => acc + Number(curr.skor || 0), 0) /
          totalAnime
        ).toFixed(2)
      : '0.00';

  return (
    <section className="summary-section">
      <div className="summary-card">
        <span className="summary-label">Total Anime</span>
        <span className="summary-value">{totalAnime}</span>
      </div>
      <div className="summary-card">
        <span className="summary-label">Sedang Tayang</span>
        <span className="summary-value">{ongoingCount}</span>
      </div>
      <div className="summary-card">
        <span className="summary-label">Selesai Tayang</span>
        <span className="summary-value">{finishedCount}</span>
      </div>
      <div className="summary-card">
        <span className="summary-label">Rata-rata Skor</span>
        <span className="summary-value">{avgScore}</span>
      </div>
    </section>
  );
}

export default AnimeSummary;

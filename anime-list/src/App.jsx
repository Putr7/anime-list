import { useState } from 'react';
import Header from './components/Header';
import AnimeSummary from './components/AnimeSummary';
import AnimeForm from './components/AnimeForm';
import AnimeList from './components/AnimeList';
import './App.css';

const INITIAL_ANIME_DATA = [
  {
    id: 1,
    judul: 'One Piece',
    tipe: 'TV',
    episode: '1000+',
    status: 'Sedang Tayang (Ongoing)',
    studio: 'Toei Animation',
    genre: 'Action, Adventure, Fantasy',
    skor: 8.92,
    sinopsis:
      'Gol D. Roger dikenal sebagai "Raja Bajak Laut", bajak laut terkuat dan paling terkenal yang pernah berlayar di Grand Line. Monkey D. Luffy, seorang bocah 17 tahun, bertekad untuk menemukan harta karun tersebut dan menjadi Raja Bajak Laut berikutnya.',
    gambar: '/OnePiece.webp'
  },
  {
    id: 2,
    judul: 'Attack on Titan',
    tipe: 'TV',
    episode: '25 (Season 1)',
    status: 'Selesai Tayang (Finished Airing)',
    studio: 'Wit Studio',
    genre: 'Action, Dark Fantasy, Drama',
    skor: 8.54,
    sinopsis:
      'Berabad-abad yang lalu, umat manusia dibantai hingga hampir punah oleh makhluk mengerikan yang disebut Titan, memaksa manusia untuk bersembunyi di balik tembok raksasa. Eren Yeager bersumpah untuk menghabisi setiap Titan demi membalas dendam ibunya.',
    gambar: '/attackontitan.webp'
  },
  {
    id: 3,
    judul: 'Jujutsu Kaisen',
    tipe: 'TV',
    episode: '24',
    status: 'Selesai Tayang (Finished Airing)',
    studio: 'MAPPA',
    genre: 'Action, Dark Fantasy, Supernatural',
    skor: 8.61,
    sinopsis:
      'Yuji Itadori menelan benda terkutuk yang sangat kuat (jari Ryomen Sukuna) untuk menyelamatkan teman-temannya. Ia kemudian bergabung dengan organisasi rahasia Penyihir Jujutsu untuk membasmi kutukan.',
    gambar: '/jujutsukaisen.webp'
  },
  {
    id: 4,
    judul: 'Naruto',
    tipe: 'TV',
    episode: '220',
    status: 'Selesai Tayang (Finished Airing)',
    studio: 'Pierrot',
    genre: 'Action, Adventure, Fantasy',
    skor: 8.00,
    sinopsis:
      'Naruto Uzumaki, seorang ninja yang hiperaktif dan tidak bisa ditebak, terus-menerus mencari pengakuan dan bermimpi menjadi Hokage, pemimpin desa yang diakui sebagai ninja terkuat.',
    gambar: '/Naruto.webp'
  }
];

function App() {
  const [animeList, setAnimeList] = useState(INITIAL_ANIME_DATA);

  const handleAddAnime = (newAnime) => {
    setAnimeList((prevList) => [newAnime, ...prevList]);
  };

  const handleDeleteAnime = (id) => {
    setAnimeList((prevList) => prevList.filter((anime) => anime.id !== id));
  };

  const handleResetData = () => {
    setAnimeList(INITIAL_ANIME_DATA);
  };

  return (
    <div className="app-container">
      <Header />
      <AnimeSummary animeList={animeList} />
      <AnimeForm onAddAnime={handleAddAnime} />
      <AnimeList
        animeList={animeList}
        onDelete={handleDeleteAnime}
        onReset={handleResetData}
      />
    </div>
  );
}

export default App;

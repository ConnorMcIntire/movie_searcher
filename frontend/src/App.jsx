
import './App.css'
import MovieCard from './components/MovieCard';

function App() {
  const movieNumber =1;

  return (
    <>
      <MovieCard movie={{title: "Tim", release_date: "2024"}} />
      <MovieCard movie={{title: "Kim", release_date: "2024"}} />
    </>
  
  );
}

export default App

// import { render } from "react-dom";
import "./styles.css";
import Movie from "./components/Movie";

export default function App() {
  const movies = [
    { title: "hello world1", year: 2001 },
    { title: "hello world2", year: 2002 },
    { title: "hello world3", year: 2003 },
    { title: "hello world4", year: 2004 }
  ];

  //map((movie)) movie 는 원하는 이름으로 넣을 수 있음. 4개의 각각을 movie 라고함
  const renderMovies = movies.map((movie) => {
    return (
      <div>
        {/* 첫번째 movie 는 props. moive라는 props 에 map 뒤 movie 데이터 넣어서 보냄 */}
        <Movie movie={movie} key={movie.title} />
        {/* Movie.js 로 복사, 이동 
      <div className="movie" key={movie.title}>
        <div className="movie-title">{movie.title}</div>
        <div className="movie-year">{movie.year}</div>
       </div> */}
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Movie List</h1>

      {renderMovies}
      {/* <div className="movie-title">{movies[0].title}</div>
        <div className="movie-year">{movies[0].year}</div> */}
    </div>
  );
}

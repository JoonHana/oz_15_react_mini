import movieListData from "./data/movieListData.json";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Swiper className="m-10" spaceBetween={50} slidesPerView={7}>
                  {movieListData.results.map((movie) => (
                    <SwiperSlide>
                      <MovieCard
                        key={movie.id}
                        title={movie.title}
                        poster={movie.poster_path}
                        rating={movie.vote_average}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="grid grid-cols-5 gap-5 p-5">
                  {movieListData.results.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      title={movie.title}
                      poster={movie.poster_path}
                      rating={movie.vote_average}
                    />
                  ))}
                </div>
              </>
            }
          />
          <Route path={"/detail"} element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import movieDetailData from "../data/movieDetailData.json";

const MovieDetail = () => {
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/w200";
  const imageUrl = BASE_IMG_URL + movieDetailData.poster_path;
  return (
    <div className="flex items-center justify-center pt-10">
      <div>
        <img src={imageUrl} alt={movieDetailData.title} className="h-[400px]" />
      </div>
      <div className="w-[700px] p-5">
        <div className="flex gap-5 pb-5 ">
          <p className="flex justify-center border p-3 w-[450px] h-[50px]">
            {movieDetailData.title}
          </p>
          <p className="flex justify-center border p-3 w-[200px] ">
            {movieDetailData.vote_average}
          </p>
        </div>
        <div className=" flex justify-center border p-5 mb-5">
          {movieDetailData.genres.map((el) => el.name).join(",")}
        </div>
        <div className="border p-5 gap-5">{movieDetailData.overview}</div>
      </div>
    </div>
  );
};

export default MovieDetail;

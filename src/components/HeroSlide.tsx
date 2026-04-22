import { Link } from "react-router-dom";
import HeroSlideInterface from "../interfaces/HeroSlideInterface";

const HeroSlide: React.FC<HeroSlideInterface> = ({
  id, title, authors, year, synopsis, image_url
}) => {
  return (
    <Link to={`/books/${id}/detail`} className="flex gap-12 h-80 mx-5">
      <img src={image_url} alt={title} />
      <div className="p-2 flex flex-col items-start justify-center">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <p>{authors}</p>
        <p>{year}</p>
        <p>{synopsis}</p>
      </div>
    </Link>
  )
};

export default HeroSlide;
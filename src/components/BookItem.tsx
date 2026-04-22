import { Link } from "react-router-dom";
import BookItemInterface from "../interfaces/BookItemInterface";

const BookItem: React.FC<BookItemInterface> = ({
  id, title, authors, image_url, volume, release_year, price
}) => {

  return (
    <li className="bg-gray-50 rounded-lg m-2 border-gray-400 border-[1px] w-44 hover:scale-105 transition-transform">
      <Link to={`/books/${id}/detail`} >
        <img src={image_url} alt={title} className="rounded-t-lg" />
        <div className="p-2 flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold">{title}</h2>
          <p>Vol. {volume}</p>
          <p>{authors}</p>
          <p>{release_year}</p>
          <p>Rp {price.toLocaleString('id-ID')}</p>
        </div>
      </Link>
    </li>
  )
};

export default BookItem;
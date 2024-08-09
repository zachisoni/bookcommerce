export interface Book {
  title: string;
  authors: string;
  publisher: string;
  genres: string;
  image_url: string;
  volume: number;
  release_year: number;
  price: number;
}

const BookItem: React.FC<Book> = ({
  title, authors, publisher, image_url, genres, volume, release_year, price
}) => {

  return (
    <li className="bg-gray-50 rounded m-2 border-gray-400 border-[1px] max-w-52">
      <img src={image_url} alt={title} className="" />
      <div className="p-2 flex flex-col items-center justify-center">
        <h2 className="text-lg font-bold">{title}</h2>
        <p>Vol. {volume}</p>
        <p>{authors}</p>
        {/* <p>{genres}</p> */}
        <p>{release_year}</p>
        <p>Rp {price.toLocaleString('id-ID')}</p>
      </div>
    </li>
  )
}

export default BookItem;
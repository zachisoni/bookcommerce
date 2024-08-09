import BookItem from "../components/BookItem"

const Home: React.FC = () => {
  return (
    <div >
      <ul className="flex">
        < BookItem
          title={"86 Eighty Six"} 
          authors={"Shirabi, Asato"} 
          publisher={"Kodansha"} 
          genres={"Action, Drama, Sci-Fi"} 
          image_url={"https://cdn.myanimelist.net/images/manga/3/190565l.jpg"} 
          volume={1}
          release_year={2017} 
          price={110000} />
        < BookItem
          title={"86 Eighty Six"} 
          authors={"Shirabi, Asato"} 
          publisher={"Kodansha"} 
          genres={"Action, Drama, Sci-Fi"} 
          image_url={"https://cdn.myanimelist.net/images/manga/3/190565l.jpg"} 
          volume={1}
          release_year={2017} 
          price={110000} />
      </ul>

    </div>
  )
}

export default Home;
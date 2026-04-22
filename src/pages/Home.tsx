import BookItem from "../components/BookItem"
import HeroSlide from "../components/HeroSlide";
import useEmblaCarousel from 'embla-carousel-react';
import NavBar from "../components/NavBar";

const Home: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();
  
  return (
    <div>
      < NavBar />
      <header className="bg-[#6A6A6A] flex items-center justify-center h-fit mb-10">
        <div className="embla transition-all ease-in flex justify-around items-center text-white max-w-[1000px] h-fit">

          <button className="embla__prev font-bold text-3xl px-10 bg-gradient-to-l gradien hover:from-black/40 to-transparent min-h-80" onClick={goToPrev}>{"<"}</button>

          <div className="embla__viewport h-fit" ref={emblaRef}>
            <div className="embla__container h-fit">
              <div className="embla__slide h-fit">
                <HeroSlide 
                  id={1} title="86" 
                  authors="Shirabi, Asato" 
                  year={2017} 
                  image_url="https://cdn.myanimelist.net/images/manga/3/190565l.jpg"
                  synopsis="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus orci quis convallis porta. Donec accumsan varius orci eget porta. Nunc accumsan eu ex a mollis. Morbi interdum sem vel lacus vulputate, sed sollicitudin erat bibendum. Suspendisse sodales convallis nulla, sed porttitor diam facilisis nec. Sed nulla dolor, pulvinar in laoreet sit amet, luctus sit amet magna. Quisque tincidunt diam ac mauris auctor cursus in ut lectus." />
              </div>
              <div className="embla__slide">
                <HeroSlide 
                  id={1} title="86 2" 
                  authors="Shirabi, Asato" 
                  year={2017} 
                  image_url="https://cdn.myanimelist.net/images/manga/3/190565l.jpg"
                  synopsis="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus orci quis convallis porta. Donec accumsan varius orci eget porta. Nunc accumsan eu ex a mollis. Morbi interdum sem vel lacus vulputate, sed sollicitudin erat bibendum. Suspendisse sodales convallis nulla, sed porttitor diam facilisis nec. Sed nulla dolor, pulvinar in laoreet sit amet, luctus sit amet magna. Quisque tincidunt diam ac mauris auctor cursus in ut lectus." />
              </div>
              <div className="embla__slide">
                
              </div>
            </div>
          </div>

          <button className="embla__next font-bold text-3xl px-10 bg-gradient-to-r hover:from-black/40 to-transparent min-h-80" onClick={goToNext}>{">"}</button>

        </div>
      </header>

      <ul className="flex my-4">
        < BookItem
          id={1}
          title={"86 Eighty Six"} 
          authors={"Shirabi, Asato"} 
          image_url={"https://cdn.myanimelist.net/images/manga/3/190565l.jpg"} 
          volume={1}
          release_year={2017} 
          price={110000} />
        < BookItem
          id={2}
          title={"86 Eighty Six"} 
          authors={"Shirabi, Asato"} 
          image_url={"https://cdn.myanimelist.net/images/manga/3/190565l.jpg"} 
          volume={1}
          release_year={2017} 
          price={110000} />
      </ul>

    </div>
  )
}

export default Home;
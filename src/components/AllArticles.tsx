import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function AllArticles({ data, title, imagePath }) {
  return (
    <div className="py-8 px-2">
      <h2 className="text-center text-3xl pb-5">{title}</h2>
      <div className="flex flex-col gap-10 justify-center items-center">
        {data.map((object, index) => (
          <section
            className="w-full flex flex-col gap-2 md:gap-5 md:flex-row"
            key={index}>
            <div className="w-6/6 md:w-3/6 flex justify-center">
              <Carousel
                className="w-full"
                opts={{
                  align: "center",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 10000,
                  }),
                ]}>
                <p>{object.data.nombre + " - " + object.data.fecha}</p>
                <CarouselContent>
                  {object.data.fotos.map((foto, fotoIndex) => (
                    <CarouselItem key={fotoIndex}>
                      <div className="max-h-full overflow-hidden">
                        <img
                          src={`${imagePath}/${foto}`}
                          alt={`Imagen de ${object.data.nombre} de la fecha ${object.data.fecha}`}
                          className="object-fill"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <article className="w-6/6 md:w-3/6 flex flex-col justify-center items-center">
              <p className="text-center mt-2 h-full pt-5">
                {object.data.descripcion}
              </p>
            </article>
          </section>
        ))}
      </div>
    </div>
  );
}

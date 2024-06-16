import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function LastEvent({ data, title, imagePath, route }) {
  const lastThreeData = data.slice(0, 3);

  return (
    <section className="py-8 px-2">
      <div className="flex flex-col md:flex-row  justify-around items-center">
        <h2 className="text-center text-3xl pb-2 font-bold">{title}</h2>
        <a className="text-center text-3xl pb-2 hover:underline" href={route}>
          Ver más...
        </a>
      </div>
      <div className="flex flex-col gap-5 items-center lg:flex-row md:gap-5 ">
        {lastThreeData.map((object, index) => (
          <article className="w-full max-w-3xl" key={index}>
            <Carousel
              className="w-full"
              opts={{ align: "start", loop: true }}
              plugins={[
                Autoplay({
                  delay: 10000,
                }),
              ]}>
              <CarouselContent>
                {object.data.fotos.map((foto, fotoIndex) => (
                  <CarouselItem key={fotoIndex}>
                    <img
                      src={`${imagePath}/${foto}`}
                      alt={`Imagen del Evento ${object.data.nombre} de la fecha ${object.data.fecha}`}
                      className="object-fill w-full h-96 rounded-lg"
                      loading="lazy"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="flex justify-around">
              <p className="text-center mt-2 text-xl">{object.data.nombre}</p>
              <p className="text-center mt-2 text-xl">{object.data.fecha}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

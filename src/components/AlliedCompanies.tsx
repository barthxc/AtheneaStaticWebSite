import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AlliedCompanies({ data, imagePath }) {
  return (
    <section className="py-8 px-2">
      <h2 className="text-center text-3xl pb-5 hover:underline">
        Empresas Colaboradoras
      </h2>
      <Carousel
        className="relative w-full max-w-screen-md mx-auto"
        opts={{
          align: "start",
          loop: true,
          containScroll: "trimSnaps",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}>
        <CarouselContent className="flex">
          {data.map((object, index) => (
            <CarouselItem key={index} className="basis-1/3 sm:basis-1/5">
              <div className="p-2">
                <img
                  src={`${imagePath}/${object.company.foto}`}
                  alt={`Logo de ${object.company.nombre}`}
                  className="object-contain h-32"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:block " />
        <CarouselNext className="hidden lg:block " />
      </Carousel>
    </section>
  );
}

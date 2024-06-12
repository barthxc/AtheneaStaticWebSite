import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function MainCarousel({ data, imagePath }) {
  return (
    <>
      <h1 className="text-4xl text-center p-10">
        Asociación de Discapacitados Athenea Sin Ánimo de Lucro
      </h1>
      <Carousel
        className="w-full"
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 7000,
          }),
        ]}>
        <CarouselContent>
          {data.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-0">
                <Card>
                  <CardContent className="p-0">
                    <img
                      src={`${imagePath}/${image}`}
                      alt={`Imagen de ${image}`}
                      className="w-full h-[36rem] object-cover"
                      loading="lazy"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}

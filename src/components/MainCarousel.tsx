import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function MainCarousel() {
  return (
    <>
      <h1 className=" text-4xl text-center p-10">
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
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-0">
                <Card>
                  <CardContent className="p-0">
                    <img
                      src="images/carousel1.png"
                      alt=""
                      className="w-full max-h-96 object-fill"
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

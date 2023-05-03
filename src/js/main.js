import Slider from "./modules/Slider.js";

const galleryCarousel = new Slider(
  ".gallery__carousel__line",
  ".gallery__carousel__line__element",
  ".gallery__carousel__controll",
  30,
  "galleryCarouselLeft",
  1
);

galleryCarousel.sliderInit()
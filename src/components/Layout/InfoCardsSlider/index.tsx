"use client";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

/**
 * InfoCardsSlider Component
 *
 * This component renders a responsive slider using the `react-slick` library.
 * It is designed to display a series of information cards with various responsive breakpoints.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The children elements to be rendered inside the slider.
 *
 * @returns {JSX.Element} A slider component wrapping the provided children elements.
 *
 * @example
 * // Usage
 * <InfoCardsSlider>
 *   <div>Your Card Content Here</div>
 *   <div>Another Card Content</div>
 * </InfoCardsSlider>
 *
 * @description
 * The slider is configured with the following settings:
 * - `slidesToShow`: Number of slides to show at once.
 * - `slidesToScroll`: Number of slides to scroll at once.
 * - `infinite`: Enables or disables infinite looping.
 * - `speed`: Transition speed in milliseconds.
 * - `dots`: Show or hide navigation dots.
 * - Responsive breakpoints adjust the number of slides to show based on the screen width.
 */
const Slider = dynamic(() => import("react-slick"), { ssr: false });

function InfoCardsSlider({ children }: { children: React.ReactNode }) {
  // const settings = {
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   infinite: false,
  //   speed: 500,
  //   dots: true,
  //   responsive: [
  //     {
  //       breakpoint: 1660,
  //       settings: {
  //         slidesToShow: 3.5,
  //         slidesToScroll: 1,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1400,
  //       settings: {
  //         slidesToShow: 2.75,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 2.25,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 580,
  //       settings: {
  //         slidesToShow: 1.2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const settings = {
    orientation: "horizontal",
    speed: 500,
    slidesToShow: 6.25,
    slidesToScroll: 1,
    useTransform: true,
    autoplay: true,
    autoplaySpeed: 4500,
    dots: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1660,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
}

export default InfoCardsSlider;

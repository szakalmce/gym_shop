import { FaNutritionix } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { GiProgression } from "react-icons/gi";

export const cardsData = [
  {
    id: 0,
    icon: <GiProgression />,
    title: "progression",
    desc: "Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.",
    bg: "dark",
    arrow: "red",
  },
  {
    id: 1,
    icon: <CgGym />,
    title: "workout",
    desc: "Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.",
    bg: "red",
    arrow: "white",
  },
  {
    id: 2,
    icon: <FaNutritionix />,
    title: "nutrition",
    desc: "Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.",
    bg: "white",
    arrow: "dark",
  },
];

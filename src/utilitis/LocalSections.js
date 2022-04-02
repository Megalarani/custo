import Card1 from "../Components/Sections/Card/Card1";
import Card2 from "../Components/Sections/Card/Card2";
import { Card3 } from "../Components/Sections/Card/Card3";
import Form1 from "../Components/Sections/Contact/Form1";
import Footer1 from "../Components/Sections/Footer/Footer1";
import Gallery1 from "../Components/Sections/Gallery/Gallery1";
import Hero1 from "../Components/Sections/Hero/Hero1";
import Hero2 from "../Components/Sections/Hero/Hero2";
import Hero3 from "../Components/Sections/Hero/Hero3";
import Hero4 from "../Components/Sections/Hero/Hero4";
import { Hero5 } from "../Components/Sections/Hero/Hero5";
import Navbar1 from "../Components/Sections/Navbar/Navbar1";
import { Navbar2 } from "../Components/Sections/Navbar/Navbar2";
import Slider1 from "../Components/Sections/Testimonals/Slider1";
import { Slider2 } from "../Components/Sections/Testimonals/Slider2";
import { Footer2 } from "../Components/Sections/Footer/Footer2";
import Form2 from "../Components/Sections/Contact/Form2";

export const LocalSections = [
  {
    group: "Navbar",
    variants: [{ c: Navbar1, id: "Navbar1" }],
    //variants: [{ c: Navbar2, id: "Navbar2" }],
  },
  {
    group: "Hero",
    variants: [
      { c: Hero1, id: "Hero1" },
      { c: Hero2, id: "Hero2" },
      { c: Hero3, id: "Hero3" },
      { c: Hero4, id: "Hero4" },
      // { c: Hero5, id: "Hero5" },
    ],
  },
  {
    group: "Card",
    variants: [
      { c: Card1, id: "Card1" },
      { c: Card2, id: "Card2" },
      // { c: Card3, id: "Card3" },
    ],
  },
  {
    group: "Gallery",
    variants: [{ c: Gallery1, id: "Gallery1" }],
  },
  {
    group: "Testimonal",
    variants: [{ c: Slider1, id: "Slider1" }],
    // variants: [{ c: Slider2, id: "Slider2" }],
  },
  {
    group: "Contact",
    variants: [{ c: Form1, id: "Form1" }],
  },
  {
    group: "Footer",
    variants: [{ c: Footer1, id: "Footer1" }],
  },
];

export const commonSections = [
  {
    group: "Navbar",
    variants: [{ c: Navbar2, id: "Navbar2" }],
  },
  {
    group: "Hero",
    variants: [{ c: Hero5, id: "Hero5" }],
  },
  {
    group: "Card",
    variants: [{ c: Card3, id: "Card3" }],
  },
  {
    group: "Gallery",
    variants: [],
  },
  {
    group: "Testimonal",
    variants: [{ c: Slider2, id: "Slider2" }],
  },
  {
    group: "Contact",
    variants: [{ c: Form2, id: "Form2" }]
  },
  {
    group: "Footer",
    variants: [{ c: Footer2, id: "Footer2" }],
  },
];

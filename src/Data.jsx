import { ImPencil } from "react-icons/im";
import { BsShop, BsHeart, BsWatch, BsStar } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
import { TiDeviceDesktop } from "react-icons/ti";
import { TbSpeakerphone } from "react-icons/tb";

import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";
import project4 from "./assets/project4.jpg";
import project5 from "./assets/project5.jpg";
import project6 from "./assets/project6.jpg";
import project7 from "./assets/project7.jpg";

import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";
import blog4 from "./assets/blog4.jpg";

import testimonial1 from "./assets/testimonial1.jpg";
import testimonial2 from "./assets/testimonial2.jpg";
import testimonial3 from "./assets/testimonial3.jpg";

import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoMailRead } from "react-icons/go";

export const navLinks = [
  {
    id: 1,
    text: "Home",
    href: "home",
  },
  {
    id: 2,
    text: "Projects",
    href: "projects",
  },
  {
    id: 5,
    text: "Testimonials",
    href: "testimonials",
  },
  {
    id: 6,
    text: "Contact",
    href: "contact",
  },
];

// export const services = [
//   {
//     id: 1,
//     icon: <ImPencil />,
//     title: "Copywrite",
//   },
//   {
//     id: 2,
//     icon: <BsShop />,
//     title: "Ecommerce",
//   },
//   {
//     id: 3,
//     icon: <TiDeviceDesktop />,
//     title: "Web Design",
//   },
//   {
//     id: 4,
//     icon: <TbSpeakerphone />,
//     title: "Scrum Methodology",
//   },
// ];
// export const serviceFinishes = [
//   {
//     id: 1,
//     icon: <BsHeart />,
//     text: "Happy Clients",
//     amount: 566,
//   },
//   {
//     id: 2,
//     icon: <BsWatch />,
//     text: "Working Hours",
//     amount: 5335,
//   },
//   {
//     id: 3,
//     icon: <BsStar />,
//     text: "Awards Won",
//     amount: 13,
//   },
//   {
//     id: 4,
//     icon: <BiCoffeeTogo />,
//     text: "Coffee Consumed",
//     amount: 1189,
//   },
// ];
export const btns = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Front", value: "front" },
  { id: 3, name: "Back", value: "back" },  
];

export const projects = [
  {
    id: 1,
    image: project1,
    value: "front",
  },
  {
    id: 2,
    image: project2,
    value: "front",
  },
  {
    id: 3,
    image: project3,
    value: "front",
  },
  {
    id: 4,
    image: project4,
    value: "front",
  },
  {
    id: 5,
    image: project5,
    value: "back",
  },
  {
    id: 6,
    image: project6,
    value: "back",
  },
  {
    id: 7,
    image: project7,
    value: "back",
  },
];

// export const blogs = [
//   {
//     id: 1,
//     image: blog1,
//     title: "What Skills Do You Need for Front-end development in 2023?",
//   },
//   {
//     id: 2,
//     image: blog2,
//     title: "What is React Js? A Comprehensive Guide",
//   },
//   {
//     id: 3,
//     image: blog3,
//     title: "Fundaments of  PHP 8",
//   },
//   {
//     id: 4,
//     image: blog4,
//     title: "Introducing to Laravel 9. Creating an Api",
//   },
// ];

export const testimonials = [
  {
    id: 1,
    image: testimonial1,
    name: "Andres Esteban",
    business: "Factoria F5",
  },
  {
    id: 2,
    image: testimonial2,
    name: "Gary Lima",
    business: "Car Accessories",
  },
  {
    id: 3,
    image: testimonial3,
    name: "Rocio Cejudo",
    business: "Factoria F5",
  },
];

export const contacts = [
  {
    id: 1,
    icon: 
    <a href="#login">

   
    <TfiHeadphoneAlt /> </a>,
    text: "+34 629-564-070",
  },
  {
    id: 2,
    icon: <HiOutlineLocationMarker />,
    text: "Barcelona",
  },
  {
    id: 3,
    icon: <GoMailRead />,
    text: "itec_19@hotmail.com",
  },
];

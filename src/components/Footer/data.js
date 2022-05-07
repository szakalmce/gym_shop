import { MdLocationPin } from "react-icons/md";
import {
  BsEnvelopeFill,
  BsFillTelephoneFill,
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";

export const footerData = [
  [
    {
      id: Math.random(),
      value: "Information",
      title: true,
    },
    {
      id: Math.random(),
      value: "Search",
      title: false,
    },
    {
      id: Math.random(),
      value: "Home",
      title: false,
    },
    {
      id: Math.random(),
      value: "Secure Payment",
      title: false,
    },
    {
      id: Math.random(),
      value: "Delivery",
      title: false,
    },
    {
      id: Math.random(),
      value: "Contact Us",
      title: false,
    },
  ],
  [
    {
      id: Math.random(),
      value: "Account",
      title: true,
    },
    {
      id: Math.random(),
      value: "Delivery",
      title: false,
    },
    {
      id: Math.random(),
      value: "Privacy Policy",
      title: false,
    },
    {
      id: Math.random(),
      value: "Home",
      title: false,
    },
    {
      id: Math.random(),
      value: "Terms & Conditions",
      title: false,
    },
  ],
  [
    {
      id: Math.random(),
      value: "Quick Links",
      title: true,
    },
    {
      id: Math.random(),
      value: "Contact Us",
      title: false,
    },
    {
      id: Math.random(),
      value: "Delivery",
      title: false,
    },
    {
      id: Math.random(),
      value: "FAQs",
      title: false,
    },
    {
      id: Math.random(),
      value: "Term & Conditions",
      title: false,
    },
    {
      id: Math.random(),
      value: "Search",
      title: false,
    },
  ],
  [
    {
      id: Math.random(),
      value: "Address",
      title: true,
    },
    {
      icon: <MdLocationPin />,
      id: Math.random(),
      value: "33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105",
      title: false,
    },
    {
      icon: <BsEnvelopeFill />,
      id: Math.random(),
      value: "Bodyflex@Exampledemo.Com",
      title: false,
    },
    {
      icon: <BsFillTelephoneFill />,
      id: Math.random(),
      value: "(+91)7-723-4608",
      title: false,
    },
    {
      id: Math.random(),
      socialIcons: [
        <BsFacebook />,
        <BsTwitter />,
        <BsPinterest />,
        <BsInstagram />,
        <BsYoutube />,
      ],
    },
  ],
];

import { food1, food2, food3 } from '../assets/img';
import video from '../assets/video/video1.mp4';
import video2 from '../assets/video/video2.mp4';
import video3 from '../assets/video/video3.mp4';

const navlink = [
  { title: 'About', id: 'about' },
  { title: 'Menu', id: 'menu' },
  { title: 'Review', id: 'review' },
  { title: 'Contact', id: 'contact' },
];

const videos = [
  {
    id: 1,
    src_video: video,
  },
  {
    id: 2,
    src_video: video3,
  },
  {
    id: 3,
    src_video: video2,
  },
];

const menu = [
  {
    id: 101,
    title: 'Cireng',
    desc: 'mixture of tapioca flour, wheat flour, and seasonings, and deep-fried until crispy',
    link: food1,
  },
  {
    id: 102,
    title: 'Nugget',
    desc: 'bite-sized piece of food that is typically made of chicken that are breaded and deep-fried',
    link: food2,
  },
  {
    id: 103,
    title: 'Americano',
    desc: 'coffee beverage that is made by adding hot water to a shot or two of espresso',
    link: food3,
  },
];

export { navlink, videos, menu };

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

const reviews = [
  {
    username: 'CoffeeLover123',
    rating: 4.5,
    text: 'The coffee here is amazing! I also love the cozy atmosphere.',
    img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
  },
  {
    username: 'LatteLover',
    rating: 5,
    text: 'The lattes here are top-notch, and the staff is always friendly.',
    img: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&q=80',
  },
  {
    username: 'TeaDrinker',
    rating: 3.5,
    text: 'The tea selection is decent, but the pastries are a bit stale.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&q=80',
  },
  {
    username: 'TeaAddict',
    rating: 4,
    text: 'I love coming here for a quiet cup of tea and some reading.',
    img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
  },
];

export { navlink, videos, menu, reviews };

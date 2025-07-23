import React from 'react';
import './App.css';
import Card from './Card';

import dandadanImg from './Images/dandadan.jpg'
import dressUpImg from './Images/MyDressUpDarling.jpg'
import fragrantImg from './Images/FragrantFlower.jpg'

function App() {
  const cardData = [
    {
      title: 'DAN DA DAN Season 2',
      tags: ['Action', 'Comedy', 'Supernatural'],
      image: dandadanImg,
      episode: 'EP2 · TV (JP)',
      rating: '8.12',
      studio: 'Science Saru',
      date: 'Jul 3, 2025 at 8:26pm PKT',
      typeInfo: ['Manga', '12 eps x 24m'],
      description: `Momo is a high school girl born into a family of spirit mediums. Her classmate Okarun is an occult fanatic. Encountering overwhelming and bizarre phenomena one after another, Momo awakens her hidden powers and Okarun gains the power of a curse. They now set out to help Momo’s childhood friend Jiji, who is tormented by ghosts, by heading over to his home for exorcism… What will be the next bizarre phenomenon they face there!?
                        [Source: Crunchyroll]`,
    },
    {
      title: 'Sono Bisque Doll wa Koi wo Suru Season 2',
      tags: ['Otaku Culture', 'Romance', 'School', 'Slice of Life'],
      image: dressUpImg,
      episode: 'EP2 · TV (JP)',
      rating: '8.12',
      studio: 'Clover Works',
      date: 'Jul 5, 2025 at 5:00pm CEST',
      typeInfo: ['Manga', '12 eps x 24m'],
      description: `When Marin Kitagawa and Wakana Gojo met, they grew close over their love for cosplay. Through interacting with classmates and making new cosplay friends, Marin and Wakana’s world keeps growing. New developments arise as Marin’s love for Wakana continues to be filled with endless excitement. In their ever-expanding world, Marin and Wakana’s story of cosplay and thrills continues!
                        [Source: Crunchyroll]`,
    },
    {
      title: 'Kaoru Hana wa Rin to Saku',
      tags: ['Drama', 'Romance', 'School'],
      image: fragrantImg,
      episode: 'EP2 · TV (JP)',
      rating: '8.12',
      studio: 'Clover Works',
      date: 'Jul 5, 2025 at 5:30pm CEST',
      typeInfo: ['Manga', '12 eps x 24m'],
      description: `This story unfolds in a particular town where two infamous schools are in constant dispute: Chidori High, a boys' school primarily attended by students with challenging academic records, and its neighbor, Kikyo Girls' High, known for its students hailing from wealthy and prestigious families.
                    One day, Rintaro Tsumugi, a second-year student at Chidori with a fierce appearance but a gentle heart, is assisting at his family's patisserie when he meets a customer named Kaoruko Waguri. Rintaro cherishes his interactions with Kaoruko, as she doesn't judge him based on his looks. However, this serene connection is abruptly shaken when Rintaro discovers that Kaoruko is actually a student at Kikyo. This revelation sets the stage for their challenging journey, as they strive to overcome the societal barriers imposed by their schools and environment, seeking to carve out their own path.
                    [Source: Netflix]`,
    },
  ];

  return (
    <main>
      {cardData.map((data, index) => (
        <Card {...data}></Card>
      ))}
    </main>
  )
}

export default App
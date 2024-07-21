import React, { useEffect, useState } from 'react';
import '../App.css';

function Banner() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='myfont w-screen  flex items-center whitespace-nowrap h-24 bg-black overflow-hidden border border-zinc-400'>
      <h1
        className='capitalize font-semibold text-6xl text-yellow-400'
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        i'm loving it 🧐
      </h1>
      <h1
        className='capitalize font-semibold text-5xl text-yellow-400'
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        i'm loving it 🥳
      </h1>
      <h1
        className='capitalize font-semibold text-7xl text-yellow-400'
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        i'm loving it 🤩
      </h1>
      <h1
        className='capitalize font-semibold text-5xl text-yellow-400'
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        i'm loving it 😎
      </h1>
      <h1
        className='capitalize font-semibold text-6xl text-yellow-400'
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        i'm loving it 🙃
      </h1>
    </div>
  );
}

export default Banner;

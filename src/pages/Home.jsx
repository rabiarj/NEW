import React from 'react';
import Carousel from '../components/Carousel';
import Fact from '../components/Fact';
import Headers from '../components/Headers';
import NavBar from '../components/NavBar';
import Footer from './Footer';
import Intro from './Intro';
import Team from './Team';

const Home = () => {
  return (
    <>
    <Headers/>
    <NavBar/>
    <Carousel/>
    <Fact/>
    <Intro/>
    <Team/>
    <Footer/>
    </>
  )
}

export default Home
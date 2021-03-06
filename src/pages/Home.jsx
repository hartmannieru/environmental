import React from 'react';
import Articles from 'src/components/Articles';
import Banner from 'src/components/Banner';
import Blog from 'src/components/Blog';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Latests from 'src/components/Latests';
import Missions from 'src/components/Missions';

const Home = () => {
  return (
    <>
      <Header />
      <Articles />
      <Missions />
      <Latests />
      <Banner />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;

import React from 'react';
import HomePageAbout from '../HomePageAbout/HomePageAbout';
import HomePageAppointment from '../HomePageAppointment/HomePageAppointment';
import HomePageBanner from '../HomePageBanner/HomePageBanner';
import HomePageServices from '../HomePageServices/HomePageServices';

const Home = () => {
  return (
    <div>
      <HomePageBanner></HomePageBanner>
      <HomePageAbout></HomePageAbout>
      <HomePageServices></HomePageServices>
      <HomePageAppointment></HomePageAppointment>
    </div>
  );
};

export default Home;
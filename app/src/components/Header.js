import React from 'react';
import headerImg from '../Images/chucknorris.jpg';

export const Header = () => {
  return (
  <header>
    <img src={headerImg} alt="Chuck Norris" width="300px" height="150px" />
    <h1>Lambda's Book of Chuck Norris Jokes (powered by ICNDB)</h1>
  </header>
  )}
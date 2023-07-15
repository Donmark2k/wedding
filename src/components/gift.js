import React from 'react';
import covidMImage from '../asset/gift/covidM.png';
import leaderboardMImage from '../asset/gift/leaderboardM.png';
import '../App.css';


const Gift = () => {
  const projects = [
    {
      id: '1',
      name: 'Covid-19 Countries\' Statistics',
      homeImage: covidMImage,
      description: 'Covid-19 Countries\' Statistics',
      modalInfo: 'A COVID-19 statistics app is a mobile application designed to provide up-to-date information on the number of confirmed cases, deaths, and recoveries from the COVID-19 pandemic. The app can help users track the current situation of the pandemic in their country or region, and also provide information on the trends and patterns of the virus globally.',
      liveLink: 'https://covidst.netlify.app/',
      sourceLink: 'https://github.com/Donmark2k/covid-stat',
    },
    {
      id: '2',
      name: 'Leaderboard',
      homeImage: leaderboardMImage,
      description: 'Leaderboard',
      modalInfo: 'A leaderboard is a feature commonly found in competitive online games and applications, including chess, that displays the rankings of players based on their scores or other performance metrics.',
      liveLink: 'https://donmark2k.github.io/leaderboard/dist/',
      sourceLink: 'https://github.com/Donmark2k/leaderboard',
    },
    {
      id: '3',
      name: 'Leaderboard',
      homeImage: leaderboardMImage,
      description: 'Leaderboard',
      modalInfo: 'A leaderboard is a feature commonly found in competitive online games and applications, including chess, that displays the rankings of players based on their scores or other performance metrics.',
      liveLink: 'https://donmark2k.github.io/leaderboard/dist/',
      sourceLink: 'https://github.com/Donmark2k/leaderboard',
    },
    // Add other project objects here...
  ];

  return (
    <section id="myrecentwork" className="grid-container" aria-label="my recent work">
      {projects.map((project) => (
        <article key={project.id} className="articleBox">
          <div className="recentImage">
            <img className="articlePic" src={project.homeImage} alt="image details" />
          </div>
          <p>{project.description}</p>
          
          <div className="button-box">
            <a href={project.liveLink} className="see-more buttons" aria-label="view">
              Gift us
            </a>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Gift;

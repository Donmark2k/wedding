import React from 'react';

const Gift = () => {
  const projects = [
    {
      id: '1',
      name: 'Covid-19 Countries\' Statistics',
      homeImage: 'src/asset/gift/covidM.png',
      description: 'Covid-19 Countries\' Statistics',
      technologies: ['redux', 'Bootstrap', 'reactJS'],
      modalInfo: 'A COVID-19 statistics app is a mobile application designed to provide up-to-date information on the number of confirmed cases, deaths, and recoveries from the COVID-19 pandemic. The app can help users track the current situation of the pandemic in their country or region, and also provide information on the trends and patterns of the virus globally.',
      liveLink: 'https://covidst.netlify.app/',
      sourceLink: 'https://github.com/Donmark2k/covid-stat',
    },
    {
      id: '2',
      name: 'Leaderboard',
      homeImage: 'src/asset/gift/leaderboardM.png',
      description: 'Leaderboard',
      technologies: ['Javascript', 'css', 'html'],
      modalInfo: 'A leaderboard is a feature commonly found in competitive online games and applications, including chess, that displays the rankings of players based on their scores or other performance metrics.',
      liveLink: 'https://donmark2k.github.io/leaderboard/dist/',
      sourceLink: 'https://github.com/Donmark2k/leaderboard',
    },
    // Add other project objects here...
  ];

  return (
    <section id="myrecentwork" className="grid-container" aria-label="my recent work">
      {projects.map((project) => (
        <article key={project.id} className="firstbox">
          <div className="recentImage">
            <img className="articlePic" src={project.homeImage} alt="image details" />
          </div>
          <p>{project.description}</p>
          <ul aria-label="Languages used in coding the work">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <div className="button-box">
            <a href={project.liveLink} className="see-more buttons" aria-label="view">
              See Project
            </a>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Gift;

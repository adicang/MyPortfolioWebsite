import React from 'react';
import Fade from 'react-reveal/Fade';
import backofficeGif from './backoffice.gif';
import deliGif from './deli.gif';
import bookingymGif from './bookinGym.gif';
import mabaliGif from './mabali.gif';
import weatherGif from './accuWeather.gif';
import TVShowGif from './TVshows.gif';
import Tilt from 'react-tilt';
import Project from './project';

import './index.css';

function Projects() {
  return (
    <div id='projects'>
      <div className='container-fluid'>
        <h2 className='projects-section-title'>Projects</h2>

        <Project
          title='Deli Shop - Backoffice'
          description='A deli management system, through the system we can manage employees, suppliers, customers, customer feedbacks, and most importantly products management and reports generation by adding products for sale, updating and changing inventory quantities and tracking and changing customer orders status.'
          viewWebsite={false}
          srcCode='https://github.com/adicang/deli-shop/'
          gif={backofficeGif}
        />

        <hr />
        <Project
          title='Deli Shop'
          description='System for deli customers when using the system you can make
          purchases, make payment and track order status. You can also
          leave feedback and get information about the deli.'
          viewWebsite={false}
          srcCode='https://github.com/adicang/deli-shop/tree/master/backoffice'
          gif={deliGif}
        />

        <hr />
        <Project
          title='TV Show Search Engine'
          description='An app that allows you to search for series and get
          information such as general description, cast, episode
          description and more. In addition, the series can be saved
          to favorites and accessed without searching. All information
          is retrievable using various API calls from the TVmaze
          website.'
          viewWebsite='https://adicang.github.io/TVshows/'
          srcCode='https://github.com/adicang/TVshows'
          gif={TVShowGif}
        />

        <hr />

        <Project
          title='bookinGym'
          description='A system through which you can search and register for
          fitness clubs based on various filters such as location,
          reviews, type of training and classes and more. You can get
          information about each fitness club and leave a review.
          Additionally, gym owners can upload all their gym
          information to the system.'
          viewWebsite={false}
          srcCode='https://github.com/adicang/bookinGym'
          gif={bookingymGif}
        />

        <hr />

        <Project
          title='AccuWeather Project'
          description='A site that pull weather forecasts API from various cities
          around the world. You can search for different cities around
          the world, view the forecast according to your current
          location, and save cities to favorites so that the forecast
          in these cities can be pulled repeatedly.'
          viewWebsite='https://adicang.github.io/weather-app-react/'
          srcCode='https://github.com/adicang/AccuWeather'
          gif={weatherGif}
        />

        <hr />

        <Project
          title='Mabali-Malabi'
          description='A site designed to market the new Malabi in Tel Aviv -
          Mabali. The site will enable to reach as many new customers
          as possible and advertise the new malabi.'
          viewWebsite={false}
          srcCode='https://github.com/adicang/Mabali-Malabi'
          gif={mabaliGif}
        />
      </div>
    </div>
  );
}

export default Projects;

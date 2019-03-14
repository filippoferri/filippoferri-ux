import React from "react";
import YoutubeBackground from 'react-youtube-background'

const HeroVideo = ({heading, addClass}) => (

  <section className={"hero is-medium has-background-primary background-image" + (addClass ? " " + addClass : "")} style={{height: '600px'}}>
    <YoutubeBackground style={{height: '600px'}}>
      prova
    </YoutubeBackground>
  </section>

);

export default HeroVideo;
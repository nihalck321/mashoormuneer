import React from 'react'
import FilmVideos from '../components/FilmVideos/FilmVideos';

import FilmsData from './FilmsData';



const Films = () => {
  return (
    <>
      <section className='films_data_main'>
        {FilmsData.map((props, index) => (
          <FilmVideos
            key={index}
            video1={props.video1}
            video2={props.video2}
            video3={props.video3}
          />
        ))}
      </section>
    </>
  )
}

export default Films
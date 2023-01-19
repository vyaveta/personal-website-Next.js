import React from 'react'
import css from './About.module.css'

const About = () => {
  return (
    <div className={css.container}>
        <h2>About</h2>
        <div className={css.box}>
            <p>
                Adwaith, 18 year old self taught MERN stack web developer,
                who codes and stare at the errors and bugs all day long.
                I create web applications and speaks about money and dreams,
                Currently working on Next.js full stack project and learing Nest.js, docker and microservices

            </p>
        </div>
    </div>
  )
}

export default About
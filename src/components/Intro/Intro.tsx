import React from 'react'
import css from './Intro.module.css'
import {SiInstagram} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'
import {VscGithub} from 'react-icons/vsc'
import {FiTwitter} from 'react-icons/fi'

const Intro = () => {
    const paragraph : string = ` <> A self taught MERN stack Developer who know multiple frameworks and technologies to create web. </> `
  return (
    <div className={css.container}>
        <div className={css.imageDiv}>
            <img src="../../../public/littleastro.png" alt="" />
        </div>
        <div className={css.intro}>
            <div className={css.selfIntro}>
            <h2>Hi I am Adwaith!</h2>
            <p>{paragraph}</p>
            </div>
            <div className={css.emailDiv}>
                <h3>whatthe12hell@gmail.com</h3>
            </div>
            <div className={css.social}>
             <div className={css.socialBox}>
                <SiInstagram />
             </div>
             <div className={css.socialBox}>
                <BsLinkedin />
             </div>
             <div className={css.socialBox}>
                <VscGithub />
             </div>
             <div className={css.socialBox}>
                <FiTwitter />
             </div>
            </div>
        </div>
    </div>
  )
}

export default Intro

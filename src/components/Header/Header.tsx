import React from 'react'
import css from './Header.module.css'
import {BsSunFill} from 'react-icons/bs'

const Header = () => {
  return (
    <div className={css.container} >
       <div className={css.left}>
        <h1>Adwaith</h1>
       </div>
       <div className={css.right}>
        <div className={css.rightBox}>Home</div>
        <div className={css.rightBox}>About</div>
        <div className={css.rightBox}>Skills</div>
        <div className={css.rightBox}>Education</div>
        <div className={css.rightBox}>Projects</div>
        {/* <div className={css.rightBoxB}>
            <button><BsSunFill /></button>
        </div> */}
        <div className={css.rightBox}>Download CV</div>
       </div>
    </div>
  )
}

export default Header
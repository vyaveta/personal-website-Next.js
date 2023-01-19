import React from 'react'
import css from './Front.module.css'

const Front = ({children} : any) => {
  return (
    <div className={css.container}>
        {children}
    </div>
  )
}

export default Front
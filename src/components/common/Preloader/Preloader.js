import React from 'react'
import preloader from '../../../images/preloader_2.svg'
import style from './Preloader.css'

const Preloader = (props) => {
    return(
        <div className={style.preloader}>
            <img src={preloader} alt="Preloader"/>
        </div>
    )
}

export default Preloader
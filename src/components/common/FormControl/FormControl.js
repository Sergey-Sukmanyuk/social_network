import React from 'react'
import style from './FormControl.module.css'

export const Input = ({input, meta, ...props}) => {
  const validate = meta.touched && meta.error
    return(
        <div>
            <div className={style.formControl +' ' + (validate ? style.error : '')}>
                <input {...input} {...props}/>
            </div>
            <div className={style.formControl +' ' + style.error}>
                {validate && <span>{meta.error}</span>}
            </div>
        </div>
    )
}
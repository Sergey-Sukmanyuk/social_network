import React from 'react'
import style from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <div className={`${style.dialog} ${style.active}`}>Sergey</div>
                <div className={style.dialog}>Vitalik</div>
                <div className={style.dialog}>Dima</div>
                <div className={style.dialog}>Irina</div>
            </div>
            <div className={style.messages}>
                <div className={style.message}> Hello, how are you?</div>
                <div className={style.message}>I'm fine. What about you?</div>
                <div className={style.message}>I'm fine too)</div>
            </div>
        </div>
    )
}

export default Dialogs;
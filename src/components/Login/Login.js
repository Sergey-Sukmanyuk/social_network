import React from 'react'
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <div className={style.item} >
                <Field placeholder={'Login'} name = {'login'} component = {'input'} />
            </div>
            <div className={style.item} >
                <Field placeholder={'Password'} name = {'password'} component = {'input'}/>
            </div>
            <div className={style.item} >
                <Field type={'checkbox'} name = {'rememberMe'} component = {'input'}/><span> remember me</span>
            </div>
            <div className={style.item} >
                <button type = {'submit'}> Enter </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const submit = (data) => {
        console.log(data)
    }
    return(
        <div className={style.wrapper}>
            <h1 >Please, login for enter</h1>
            <LoginReduxForm onSubmit = {submit}/>
        </div>
    )
}

export default Login
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password,formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={'login'}>
            <h3>Войти</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
return(
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'E-mail'} component={'input'} name={'login'}/>
        </div>
        <div>
            <Field placeholder={'Пароль'} component={'input'} name={'password'}
            type={'password'}/>
        </div>
        <div>
            <label >
                <Field placeholder={'Пароль'}
                       component={'input'} name={'rememberMe'}
                       type={'checkbox'}/>
                <span>Запомнить меня</span>
            </label>
        </div>
        <div>
            <button className={'btn'}>Войти</button>
        </div>
    </form>
)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect( mapStateToProps, {login})(Login) ;
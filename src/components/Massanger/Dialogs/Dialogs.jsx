import React from "react";
import Mail from "./../Massages/Massages";
import {Field, reduxForm} from "redux-form";
import {addMassage} from "../../../redux/massanger-reducer";

const Dialogs = (props) => {

    const addMassage = (values) =>{
        props.addMassage(values.newMassage)
    }
    return (
        <div>
            <div className="content__massanger massanger">
                <div className="massanger__dialogs dialogs">s</div>
                <div className="massanger__massages massages">
                    <div className="massages__addmassage">
                       <NewMassageReduxForm
                           onSubmit = {addMassage}
                       />
                    </div>
                    <Mail massages={props.state.massangerPage.massages}/>
                </div>
            </div>
        </div>
    );
};
const newMassage = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <Field
                component={'input'}
                name={'newMassage'}
                type="text"
                placeholder={'Ваше сообщение...'}
            />
            <button className="btn">Отправить</button>
        </form>
    )
}

const NewMassageReduxForm = reduxForm({form: 'addNewMassage'})(newMassage)
export default Dialogs;

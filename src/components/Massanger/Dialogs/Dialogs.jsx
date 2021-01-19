import React from "react";
import Mail from "./../Massages/Massages";


const dialogs = (props) => {
    let newMassageText = React.createRef();

  let addMassage = () => {
    props.addMassage();
  }
  let onMassageChange = () => {
    let text = newMassageText.current.value;
    props.updateMassageText(text);
 }
  return (
    <div>
      <div className="content__massanger massanger">
        <div className="massanger__dialogs dialogs">s</div>
        <div className="massanger__massages massages">
          <div className="massages__addmassage">
            <input
             ref={newMassageText} value={props.state.massangerPage.newMassageText} onChange={onMassageChange} type="text" placeholder={'Ваше сообщение...'}/>
            <button className="btn" onClick={addMassage}>Отправить</button>
          </div>
          <Mail massages={props.state.massangerPage.massages} />
        </div>
      </div>
    </div>
  );
};
export default dialogs;

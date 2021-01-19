import { connect } from "react-redux";
import { addMassage, updateMassageText } from "../../redux/massanger-reducer";
import Dialogs from "./Dialogs/Dialogs";

let mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const dialogsContainer = connect(mapStateToProps, {addMassage, updateMassageText})(Dialogs);

export default dialogsContainer;

import { connect } from "react-redux";
import { addMassage } from "../../../redux/massanger-reducer";
import Dialogs from "./Dialogs";
import React from 'react';
import {withAuthRedirect} from "../../../hoc/hoc";
import {compose} from "redux";

class DialogsContainer extends React.Component {
  componentDidMount(){

  }
  render() {
    return <Dialogs state={this.props.state}
                    addMassage={this.props.addMassage}/>
  }

}

const mapStateToProps = (state) => {
  return {
    state: state,
    isAuth: state.auth.isAuth
  };
};
export default compose(
    connect(mapStateToProps, {addMassage}),
    withAuthRedirect
)(DialogsContainer)




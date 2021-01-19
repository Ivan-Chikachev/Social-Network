let initialState = {
  massages: [{ id: 1, massage: "Hi, i am cat)" }, { id: 1, massage: "Hi, i am cat)" }],
  newMassageText: "",
};

const SEND_MASSAGE = 'SEND_MASSAGE';
const ADD_MASSAGE = 'ADD_MASSAGE';

const massangerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MASSAGE:
      return { ...state, newMassageText: action.newText };
    case ADD_MASSAGE:
      let newMassage = {
        id: 2,
        massage: state.newMassageText,
      };
      return {
        ...state,
        massages: [...state.massages, newMassage],
        newMassageText: "",
      };

    default:
      return state;
  }
};

export const updateMassageText = (text) => ({
  type: SEND_MASSAGE,
  newText: text,
});
export const addMassage = () => ({ type: ADD_MASSAGE });

export default massangerReducer;

let initialState = {
  massages: [{ id: 1, massage: "Hi, i am cat)" }],
  newMassageText: "",
};

const massangerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND MASSAGE":
      state.newMassageText = action.newText;
      return state;
    case "ADD-MASSAGE":
      let newMassage = {
        id: 2,
        massage: state.newMassageText,
      };
      state.massages.push(newMassage);
      state.newMassageText = "";
      return state;

    default:
     return state;
  }
};

export const updateMassageTextCreator = (text) => ({
  type: "SEND-MASSAGE",
  newText: text,
});
export const addMassageCreator = () => ({ type: "ADD-MASSAGE" });

export default massangerReducer;

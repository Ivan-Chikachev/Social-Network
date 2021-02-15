let initialState = {
    massages: [
        {id: 1, massage: "Hi, i am cat)"},
        {id: 1, massage: "Hi, i am cat)"}
    ],

};

const ADD_MASSAGE = 'ADD_MASSAGE';

const massangerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MASSAGE:
            let newMassage = {
                id: 2,
                massage: action.newMassageText,
            };

            return {...state, massages: [...state.massages, newMassage]};
        default:
            return state;
    }
};


export const addMassage = (newMassageText) => ({type: ADD_MASSAGE, newMassageText});

export default massangerReducer;

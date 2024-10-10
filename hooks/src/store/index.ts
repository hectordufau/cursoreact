export const initialState = {
    number: 1234,
    text: "ContextAPI + Hooks",
    setNumber: (x: any) => { },
    setText: (x: any) => { },
};

export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "add2ToNumber":
            return { ...state, number: state.number + 2 };
        case "login":
            return { ...state, user: { name: action.payload } };
        default:
            return state;
    }
};
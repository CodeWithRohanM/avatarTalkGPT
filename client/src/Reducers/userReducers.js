const initialState = {
    loaderStatus: false,
    characterName: "Elon",
    staticChatResponse: "",
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_LOADER_STATUS": {
            return {
                ...state,
                loaderStatus: action.payLoad,
            };
        }

        case "GET_STATIC_CHAT_RESPONSE": {
            return {
                ...state,
                staticChatResponse: action.payLoad,
            };
        }

        default: return initialState;
    }
};

export default userReducer;
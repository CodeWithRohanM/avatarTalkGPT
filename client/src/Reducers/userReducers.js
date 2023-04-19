const initialState = {
    loaderStatus: false,
    personName: "",
    staticChatResponse: "",
    categoryName: "",
    link: "",
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

        case "GET_PERSON_NAME":{
            return{
                ...initialState,
                personName: action.payLoad,
            };
        }

        case "GET_CATEGORY":{
            return {
                ...initialState,
                categoryName: action.payLoad,
            };
        }

        case "GET_PERSON_URL":{
            return {
                ...initialState,
                link: action.payLoad,
            };
        }

        default: return initialState;
    }
};

export default userReducer;
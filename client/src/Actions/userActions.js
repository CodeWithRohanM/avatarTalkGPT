import { Action } from "@remix-run/router";

const getLoaderStatus = (status) => {
    return {
        type: "GET_LOADER_STATUS",
        payLoad: status,
    }
};

const getStaticChatResponse = (response) =>{
    return {
        type: "GET_STATIC_CHAT_RESPONSE",
        payLoad: response,
    }
};


export { getLoaderStatus, getStaticChatResponse };
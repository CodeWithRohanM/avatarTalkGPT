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

const getPersonName = (name) =>{
    return {
        type: "GET_PERSON_NAME",
        payLoad: name,
    };
};

const getCategory = (categoryName) =>{
    return {
        type: "GET_CATEGORY",
        payLoad: categoryName,
    };
};

const getPersonURL = (url) =>{
    return {
        type: "GET_PERSON_URL",
        payLoad: url,
    };
};


export { getLoaderStatus, getStaticChatResponse, getPersonName, getCategory, getPersonURL };
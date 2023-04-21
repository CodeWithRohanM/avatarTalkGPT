const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
});

const OpenAi = new OpenAIApi(configuration);


const PORT = 8080;


app.get("/", (req, res) => {
    res.send("Home Section Server..");
})


app.post("/", async (req, res) => {
    try {
        // console.log("heyy, am here..");

        // const getUserPromot = req.body.questions;
        // console.log(getUserPromot);

        const getReponse = await OpenAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: req.body.questions }]
        });

        console.log(getReponse.data.choices[0].message.content);
        res.status(200).json(getReponse.data.choices[0].message.content);

    } catch (err) {
        console.warn(err);
    }
});


app.post("/elonData", async (req, res) => {
    try {
        // console.log("Am Here El");
        const getRequestedPrompt = req.body.getElonData;

        const getResponse = await OpenAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role:"user", content: getRequestedPrompt }],
        });

        console.log(getResponse.data.choices[0].message.content);

        res.status(200).json(getResponse.data.choices[0].message.content);

    } catch (err) {
        console.warn(err);
    }

});

app.post("/roleplayChat", async (req, res) => {
    try {
        const getUserChat = req.body.userChat;

        const getReponse = await OpenAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: getUserChat }],
        });

        res.status(200).json(getReponse.data.choices[0].message.content);

    } catch (err) {
        console.warn(err);
    }

});

app.post("/getEndChatMessage", async(req, res)=>{
    try{
        // console.log("Inside PersonPrimo");
        const getPersonPromt = req.body.getMessage;

        const getResponse = await OpenAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages:[{role: "user", content: getPersonPromt}],
        });

        res.status(200).json(getResponse.data.choices[0].message.content);

    }catch(err){
        console.warn(err);
    }

})






app.listen(PORT, "127.0.0.1", () => {
    console.log("Server Connected Suucessfully!! 👍 👍");
});


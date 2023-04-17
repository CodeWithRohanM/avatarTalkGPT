const express = require("express");
const app = express();
const cors = require("cors");



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const {Configuration, OpenAIApi} = require("openai");

const configuration = new Configuration({
    apiKey: "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",
});

const OpenAi = new OpenAIApi(configuration);


const PORT = 8080;


app.get("/", (req, res)=>{
    res.send("Home Section Server..");
})


app.post("/", async(req, res)=>{
    try{
        // console.log("heyy, am here..");

        // const getUserPromot = req.body.questions;
        // console.log(getUserPromot);

        const getReponse = await OpenAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: req.body.questions}]
        });

        console.log(getReponse.data.choices[0].message.content);
        res.status(200).json(getReponse.data.choices[0].message.content);
        
    }catch(err){
        console.warn(err);
    }

});







app.listen(PORT, "127.0.0.1", ()=>{
    console.log("Server Connected Suucessfully!! 👍 👍");
});


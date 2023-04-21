const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const FormData = require("form-data");



const fs = require('fs');

// streaming chunk size
const CHUNK_SIZE = 1024;

const XI_API_KEY = "29acd86f0802812a7ef2428e5cb62d0c";
const VOICE_SAMPLE_PATH1 = "/Users/rohanmote/Desktop/Thapa Projects/talkGPT/client/public/Images/Shahrukh Khan.wav";
const OUTPUT_PATH = "/Users/rohanmote/Desktop/Thapa Projects/talkGPT/client/src/audio/generated.mp3";

const addVoiceUrl = "https://api.elevenlabs.io/v1/voices/add";
const historyUrl = "https://api.elevenlabs.io/v1/history";




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
            messages: [{ role: "user", content: getRequestedPrompt }],
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

app.post("/getEndChatMessage", async (req, res) => {
    try {
        // console.log("Inside PersonPrimo");
        const getPersonPromt = req.body.getMessage;

        const getResponse = await OpenAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: getPersonPromt }],
        });

        res.status(200).json(getResponse.data.choices[0].message.content);

    } catch (err) {
        console.warn(err);
    }

})







app.post("/getData", async () => {
    try {

        console.log("Inside getDtcxn");


        const headers = {
            "Accept": "application/json",
            "xi-api-key": XI_API_KEY,
        };

        const voiceData = {
            'name': 'Shahrukh Khan',
            'labels': '{"accent": "Indian", "gender": "Male"}',
            'description': 'Try to mimic Shahrukh Khan completely.',
        };

        const files = [
            { name: 'files', file: fs.createReadStream(VOICE_SAMPLE_PATH1) },
        ];

        async function generateVoice() {
            try {
                const formData = new FormData();
                formData.append('data', JSON.stringify(voiceData));
                if (files.length > 0) {

                for (const file of files) {
                    formData.append(file.name, file.file);
                }
            }


                // add voice
                const addVoiceResponse = await fetch(addVoiceUrl, {
                    method: 'POST',
                    headers,
                    body: formData,
                });
                const addVoiceJson = await addVoiceResponse.json();
                const voice_id = addVoiceJson.voice_id;
                console.log("Voice Id = " + JSON.stringify(addVoiceJson));

                // get default voice settings
                const defaultSettingsResponse = await fetch(
                    "https://api.elevenlabs.io/v1/voices/settings/default",
                    { headers }
                );
                const defaultSettingsJson = await defaultSettingsResponse.json();
                const { stability, similarity_boost } = defaultSettingsJson;



                const tts_url = `https://api.elevenlabs.io/v1/text-to-speech/${voice_id}/stream`;

                headers["Content-Type"] = "application/json";

                const data = {
                    "text": "Some very long text to be read by the voice",
                    "voice_settings": {
                        "stability": stability,
                        "similarity_boost": similarity_boost
                    }
                };

                const ttsResponse = await fetch(tts_url, {
                    method: 'POST',
                    headers,
                    body: JSON.stringify(data),
                    responseType: 'blob'
                });
                const writer = fs.createWriteStream(OUTPUT_PATH);
                // ttsResponse.body.pipe(writer);




                if (ttsResponse.body) {
                    ttsResponse.body.on('data', (chunk) => {
                        writer.write(chunk);
                    });
                    ttsResponse.body.on('end', () => {
                        writer.end();
                    });
                } else {
                    console.error("Empty response body.");
                }

                console.log("Writer = " + writer);


                // Retrieve history. It should contain generated sample.
                const historyResponse = await fetch(historyUrl, { headers });
                const historyJson = await historyResponse.json();
                console.log("History = " + historyJson);
            } catch (error) {
                console.error(error);
            }
        }

        generateVoice();

    } catch (err) {

    }

});






app.listen(PORT, "127.0.0.1", () => {
    console.log("Server Connected Suucessfully!! 👍 👍");
});


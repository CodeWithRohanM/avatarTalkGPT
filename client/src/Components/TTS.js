import React from "react";

const TTS = () =>{

    const getData = async() =>{
        try{
            console.log("Fetching..");
            const getData = await fetch("/getData", {
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({

                })
            });

            const getResponse = await getData.json();

            console.log(getResponse);

        }catch(err){
            console.warn(err);
        }
        
    }

    return <>

    <button type="button" onClick={getData}>Fetch..</button>
    
    </>
};

export default TTS;
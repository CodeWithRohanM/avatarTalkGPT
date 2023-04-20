import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCategory, getPersonName, getPersonURL, getTagLine } from "../Actions/userActions";
import Header from "./Header";

const PersonCategoryList = () => {

    const pName = useSelector((state) => state.userReducer.personName);
    const pURL = useSelector((state) => state.userReducer.link);
    const [loader, setLoader] = useState(false);

    const Business = [
        {
            fullName: "Elon Musk",
            image: "Elon",
            link: "muskURL",
            descri: "Hi, I'm Elon Musk, a South African-born American entrepreneur, engineer, and inventor. I'm the CEO of SpaceX, Tesla, and Neuralink. Lets talk abouts Spaceships, Cars, Planets and be cool!",
            id: 0,
            tagLine: "Lets talk abouts Spaceships, Cars, Planets and be cool!",
        }, {
            fullName: "Jeff Bezos",
            image: "Jeff",
            link: "jeffURL",
            descri: "Hi, I'm Jeff Bezos, the founder of Amazon and one of the richest people in the world. Let's have some fun chat about entrepreneurship or space exploration.",
            id: 1,
            tagLine: "Let's have some fun chat about entrepreneurship or space exploration.",

        }, {
            fullName: "Bill Gates",
            image: "Bill",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
            descri: "Hi, I am Bill Gates, the co-founder of Microsoft, entrepreneur, and philanthropist. Let's have a fun chat about technology and its impact on our society or discuss solutions to global issues through innovation.",
            id: 2,
            tagLine: "Let's have a fun chat about technology",

        }, {
            fullName: "Steve Jobs",
            image: "Steve",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
            descri: "Hi, I am Steve Jobs, the co-founder of Apple Inc. and a pioneer in the personal computer revolution. Let's have some fun chat about the impact of technology on our daily lives or let's talk about the future of innovation in the tech industry.",
            id: 3,
            tagLine: "let's talk about the future of innovation in the tech industry.",

        }, {
            fullName: "Mark Zuckerberg",
            image: "Mark",
            link: "markURL",
            descri: "Hi, I'm Mark Zuckerberg, the co-founder and CEO of Facebook. Let's chat about the future of social media or how technology is shaping our world.",
            id: 4,
            tagLine: "Let's chat about the future of social media",

        }, {
            fullName: "Satya Nadela",
            image: "Satya",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
            descri: "Hi, I am Satya Nadella, the current CEO of Microsoft who has led the tech giant towards cloud computing and AI. Let's have some fun chat about the future of technology or talk about how technology can shape our world in unexpected ways.",
            id: 5,
            tagLine: "Lets talk about how technology can shape our world in unexpected ways.",

        }];

    const Celebraties = [
        {
            fullName: "Shahrukh Khan",
            image: "Shahrukh",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
            descri: "Hi, I am Satya Nadella, the current CEO of Microsoft who has led the tech giant towards cloud computing and AI. Let's have some fun chat about the future of technology or talk about how technology can shape our world in unexpected ways.",
            id: 0,
            tagLine: "Lets talk about how technology can shape our world in unexpected ways.",

        },
        {
            fullName: "Hrithik Roshan",
            image: "Hrithik",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
            descri: "Hi, this is Elon",
            id: 1,
            tagLine: "Lets talk about how technology can shape our world in unexpected ways.",

        },
        {
            fullName: "Amitabh Bacchan",
            image: "Amitabh",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
            descri: "Hi, this is Elon",
            id: 2,
            tagLine: "Lets talk about how technology can shape our world in unexpected ways.",

        },
        {
            fullName: "Aamir Khan",
            image: "Aamir",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
            descri: "Hi, this is Elon",
            id: 3,
            tagLine: "Lets talk about how technology can shape our world in unexpected ways.",

        },
        {
            fullName: "Salman Khan",
            image: "Salman",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
            descri: "Hi, this is Elon",
            id: 4,
            tagLine: "Lets talk about how technology can shape our world in unexpected ways.",

        },
        {
            fullName: "Robert Downy Jr.",
            image: "Robert",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
            descri: "Hi, this is Elon",
            id: 5,
            tagLine: "Lets talk about how technology can shape our world in unexpected ways.",

        },
        {
            fullName: "Leonardo Dicaprio",
            image: "Leonardo",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
            descri: "Hi, this is Elon",
            id: 6,
            tagLine: "Lets talk about how technology can shape our world in unexpected ways.",

        },
        {
            fullName: "Bradd Pitt",
            image: "Bradd",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
            descri: "Hi, this is Elon",
            id: 7,
            tagLine: "Lets talk about how technology can shape our world in unexpected ways.",

        },
        {
            fullName: "Johny Depp",
            image: "Johny",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
            descri: "Hi, this is Elon",
            id: 8,
            tagLine: "Lets talk about how technology can shape our world in unexpected ways.",

        },
        {
            fullName: "Dwayne Johnson",
            image: "Dwayne",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
            descri: "Hi, this is Elon",
            id: 9,
            tagLine: "Lets talk about how technology can shape our world in unexpected ways.",

        },
        {
            fullName: "Ryan Reynorlds",
            image: "Ryan",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
            descri: "Hi, this is Elon",
            id: 10,
            tagLine: "Lets talk about how technology can shape our world in unexpected ways.",

        },
    ];

    const Sports = [{
        fullName: "Lionel Messi",
        image: "Lionel",
        link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
        descri: "Hi, this is Messi",
        id: 0,
        tagLine: "Lets talk about how technology can shape our world in unexpected ways.",

    },]



    const dispatch = useDispatch();

    const [peopleArray, setPeopleArray] = useState(Business);

    const getCategoryName = useSelector((state) => state.userReducer.categoryName);
    console.log("Category = " + getCategoryName);

    const getPeopleOnBoard = async () => {
        try {
            if (getCategoryName === "Business") {
                setLoader(true);
                setTimeout(()=>{
                    setLoader(false);
                    setPeopleArray(Business);
                }, 3000);
            }
            else if (getCategoryName === "Celebraties") {
                setPeopleArray(Celebraties);
            }
            else if (getCategoryName === "Sports") {
                setPeopleArray(Sports);
            }
        } catch (err) {
            console.warn(err);
        }
    };


    useEffect(() => {
        getPeopleOnBoard();
    }, [getCategoryName]);



    // TO Show And Hide The Blocks Of Person Card
    const showDescri = (id) => {

        const getElement = peopleArray.filter((curVal, index) => index !== id);
        getElement.map((curVal, index) => curVal.id).forEach((id) => document.getElementById(id).style.display = "none");

        document.getElementById(id).style.display = "block";
    }





    return <>
        <div className="flex flex-row w-screen h-screen">

            <aside className="avatarGPTSideMenu h-full border-r border-white/5 p-2 flex flex-col gap-y-6">
                <div className="flex flex-row gap-x-6 border border-white/20 px-4 py-3 w-full hover:bg-white/5 hover:cursor-pointer transition ease-in-out duration-300 rounded-md shadow-inner items-center"
                >
                    <span className="text-xl">✋</span>
                    Choose Category
                </div>

                <div className="flex flex-col gap-y-2 w-full">

                    <div className="flex flex-row gap-x-6 w-full px-4 py-3 border border-white/10 hover:bg-white/5 hover:cursor-pointer transition ease-in-out duration-300 rounded-md shadow-inner items-center" onClick={() => {
                        dispatch(getCategory("Business"));
                    }}>
                        <img src="/Images/circular.png" className="w-5 h-5" alt="resetThread"></img>
                        <h1>Business</h1>
                    </div>

                    <div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/10 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner" onClick={() => {
                        dispatch(getCategory("Celebraties"));
                    }}>
                        <img src="/Images/lightMode.png" className="w-5 h-5" alt="resetThread"></img>
                        <h1>Celebraties</h1>
                    </div>

                    <div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/10 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner"
                        onClick={() => {
                            dispatch(getCategory("Sports"));
                        }}>

                        <img src="/Images/discord.png" className="w-5 h-5" alt="resetThread"></img>
                        <h1>Sports</h1>
                    </div>

                    <div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/10 shadow-inner rounded-md hover:cursor-pointer hover:bg-white/5 transition ease-in-out duration-300">
                        <img src="/Images/share.png" className="w-5 h-5" alt="resetThread"></img>
                        <h1>Influencers</h1>
                    </div>

                    <div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/10 hover:cursor-pointer hover:bg-white/5 transition ease-in-out duration-300 shadow-inner runded-md">
                        <img src="/Images/logout.png" className="w-5 h-5" alt="resetThread"></img>
                        <h1>Authors</h1>
                    </div>

                </div>

            </aside>







            <section className={`mainAvatarGPTChatBox h-full flex-1 flex flex-col gap-y-10 items-center p-2 relative bg-gradient-to-b from-cyan-100 to-cyan-50`}>

                <Header getBorderColor="border-gray-700" getTextColor="text-black" />

                <h1 className="text-blue-900 font-bold text-4xl bg-black/10 shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 px-6 py-2 rounded-md" id="tagLine">{getCategoryName}</h1>



                <div className="grid grid-cols-3 gap-x-4 w-11/12 gap-y-6 overflow-scroll">
                    {
                        loader && <h1>Loading..</h1>
                    }

                    {
                       !loader&& peopleArray.map((curVal, index) => {
                            return <>

                                <div className="flex flex-col gap-y-2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 items-center h-fit rounded-lg p-4 shadow-inner"
                                    onClick={() => {
                                        dispatch(getPersonName(curVal.fullName));
                                        // window.alert(index);
                                        showDescri(index);
                                    }}
                                    id="personDescri">

                                    <div className="flex flex-col gap-y-3 items-center border-b border-black/30 w-full pb-4 hover:cursor-pointer">

                                        <img src={`/Images/${curVal.image}.png`} className="w-44 h-44 border-2 border-white/60 rounded-full shadow-2xl" alt="elon"></img>
                                        <h1 className="text-2xl font-bold text-white/80">{curVal.fullName}</h1>
                                    </div>

                                    <div className="flex flex-col gap-y-4 hidden items-centerw-full bg-white rounded-lg" id={index}>
                                        <h1 className="text-center p-3 rounded-b-lg text-lg text-black/60">{curVal.descri}</h1>

                                        <NavLink to="/avatarGPT/roleplay">
                                            <div className="flex justify-center">
                                                <button type="button" className="bg-red-600 text-white px-6 py-2 rounded-md shadow-2xl font-bold">Lets Talk!</button>
                                            </div>
                                        </NavLink>
                                    </div>


                                </div>

                            </>

                        })
                    }
                </div>








            </section>
        </div>



    </>
};

export default PersonCategoryList;
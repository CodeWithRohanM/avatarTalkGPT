import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCategory, getPersonName, getPersonURL } from "../Actions/userActions";
import Header from "./Header";

const PersonCategoryList = () => {

    const pName = useSelector((state) => state.userReducer.personName);
    const pURL = useSelector((state) => state.userReducer.link);

    const Business = [
        { fullName: "Elon Musk",
        image: "Elon",
        link: "muskURL",
    },{ fullName: "Jeff Bezos",
        image: "Jeff",
        link: "jeffURL",
    },{ fullName: "Bill Gates",
        image: "Bill",
        link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
    },{ fullName: "Steve Jobs",
        image: "Steve",
        link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
    },{ fullName: "Mark Zuckerberg",
        image: "Mark",
        link: "markURL",
    },{ fullName: "Satya Nadela",
        image: "Satya",
        link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
    }];

    const Celebraties = [
        { fullName: "Shahrukh Khan",
            image: "Shahrukh",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
        },
        { fullName: "Hrithik Roshan",
            image: "Hrithik",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
        },
        { fullName: "Amitabh Bacchan",
            image: "Amitabh",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
        },
        { fullName: "Aamir Khan",
            image: "Aamir",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
        },
        { fullName: "Salman Khan",
            image: "Salman",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
        },
        { fullName: "Robert Downy Jr.",
            image: "Robert",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
        },
        { fullName: "Leonardo Dicaprio",
            image: "Leonardo",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
        },
        { fullName: "Bradd Pitt",
            image: "Bradd",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
        },
        { fullName: "Johny Depp",
            image: "Johny",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
        },
        { fullName: "Dwayne Johnson",
            image: "Dwayne",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
        },
        { fullName: "Ryan Reynorlds",
            image: "Ryan",
            link: "https://www.youtube.com/watch?v=xfGbyW6fs5w",
        },
    ]



    const dispatch = useDispatch();

    const [peopleArray, setPeopleArray] = useState(Business);

    const getCategoryName = useSelector((state) => state.userReducer.categoryName);
    console.log("Category = " + getCategoryName);

    const getPeopleOnBoard = async () => {
        try {
            if (getCategoryName === "Business") {
                await setPeopleArray(Business);
            }
            else if (getCategoryName === "Celebraties") {
                await setPeopleArray(Celebraties);
            }
        } catch (err) {
            console.warn(err);
        }
    };


    useEffect(() => {
        getPeopleOnBoard();
    }, [getCategoryName]);




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

                    <div className="flex flex-row gap-x-6 w-full px-4 py-3 items-center border border-white/10 hover:cursor-pointer transition ease-in-out duration-300 hover:bg-white/5 rounded-md shadow-inner">
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







            <section className={`mainAvatarGPTChatBox h-full flex-1 flex flex-col gap-y-10 items-center p-2 relative`}>

                <Header getBorderColor="border-gray-700" getTextColor="text-black" />

                <h1 className="text-blue-900 font-bold text-4xl" id="tagLine">ChatGPT</h1>



                <div className="grid grid-cols-3 gap-x-4 w-11/12 bg-pink-400 gap-y-6">

                    {
                        peopleArray.map((curVal, index) => {
                            return <>


                                <NavLink to="/avatarGPT/roleplay"><div className="flex flex-col gap-y-4 bg-yellow-300 items-center h-fit" onClick={()=>{
                                        dispatch(getPersonName(curVal.fullName));
                                    }}>

                                    <div className="flex flex-col gap-y-2 items-center">
                                        <img src={`/Images/${curVal.image}.png`} className="w-32 h-32" alt="elon"></img>
                                        <h1>{curVal.fullName}</h1>
                                    </div>


                                    <h1 className="bg-pink-500 text-center hidden" id="elon_descri">Hi, I am Elon Musk, an entrepreneur, and visionary who is changing the world by revolutionizing the transportation and energy industries with electric cars, rockets, and solar power.
                                    </h1>

                                </div></NavLink>

                            </>

                        })
                    }
                </div>








            </section>
        </div>



    </>
};

export default PersonCategoryList;
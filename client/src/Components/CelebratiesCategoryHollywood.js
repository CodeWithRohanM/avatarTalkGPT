import React, {useState, useEffect} from "react";
import TemplateAside from "./TemplateAside";
import { useDispatch, useSelector } from "react-redux";
import { CelebratiesHollywood } from "./ListItems";
import { getPersonName, getPersonURL } from "../Actions/userActions";
import Header from "./Header";
import { NavLink } from "react-router-dom";

const CelebratiesCategoryHollywood = () => {

    const pCategory = useSelector((state) => state.userReducer.categoryName);

    const [loader, setLoader] = useState(false);
    const [peopleArray, setPeopleArray] = useState(CelebratiesHollywood);


    const dispatch = useDispatch();

    const pName = useSelector((state) => state.userReducer.personName);
    const pURL = useSelector((state) => state.userReducer.link);



    const getDetails = (id) => {

        const getSelectedData = peopleArray.filter((curVal, index) => curVal.id === id).map((curVal, index) => curVal);

        showDescri(id);


        dispatch(getPersonName(getSelectedData[0].fullName));
        dispatch(getPersonURL(getSelectedData[0].tagLine));

    };

    const showDescri = (id) => {
        // console.log("Inside Link = " + link);

        // dispatch(getPersonURL(link));

        const getElement = peopleArray.filter((curVal, index) => index !== id);
        getElement.map((curVal, index) => curVal.id).forEach((id) => document.getElementById(id).style.display = "none");

        document.getElementById(id).style.display = "block";
    };
    return <>




        <div className="flex flex-row w-screen h-screen">


            <TemplateAside />



            <section className={`mainAvatarGPTChatBox h-full flex-1 flex flex-col gap-y-10 items-center p-2 relative bg-gradient-to-b from-cyan-100 to-cyan-50`}>

                <Header getBorderColor="border-gray-700" getTextColor="text-black" />

                <h1 className="text-blue-900 font-bold text-4xl bg-black/10 shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 w-3/4 text-center py-2 rounded-md relative" id="tagLine">Your Beloved Celebraties</h1>

                <img src="/Images/films.png" className="w-24 h-24 absolute top-4 left-36" alt="flims"></img>



                <div className="grid grid-cols-3 gap-x-4 w-11/12 gap-y-6 overflow-y-scroll scroll-smooth">
                    {
                        loader && <h1>Loading..</h1>
                    }

                    {
                        !loader && peopleArray.map((curVal, index) => {
                            return <>

                                <div className="flex flex-col gap-y-2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 items-center h-fit rounded-lg p-4 
                            shadow-inner hover:-translate-y-1 transition ease-in-out duration-500 hover:shadow-2xl hover:bg-gradient-to-l hover:from-yellow-600 hover:to-yellow-300"
                                    onClick={() => {
                                        getDetails(index);
                                    }}>

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

export default CelebratiesCategoryHollywood;
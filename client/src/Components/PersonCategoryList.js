import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const PersonCategoryList = () => {

    const [loader, setLoader] = useState(false);
    const [peopleArray, setPeopleArray] = useState([]);


    const dispatch = useDispatch();

    // const pName = useSelector((state) => state.userReducer.personName);
    // const pURL = useSelector((state) => state.userReducer.link);
    const pCategory = useSelector((state) => state.userReducer.categoryName);
    console.log("Categorysfdij = " + pCategory);





    // const getPeopleOnBoard = async () => {
    //     try {
    //         if (pCategory === "Businesscvxk") {
    //             // setPeopleArray(Business);
    //             // console.log(peopleArray[0].tagLine);
    //         }
    //         else if (pCategory === "Celebraties") {
    //             // setPeopleArray(Celebraties);
    //         }
    //         else if (pCategory === "Sports") {
    //             // setPeopleArray(Sports);
    //         }
    //     } catch (err) {
    //         console.warn(err);
    //     }
    // };


    // useEffect(() => {
    //     getPeopleOnBoard();
    // }, [getCategoryName]);

    // useEffect(() => {
    //     getPeopleOnBoard();
    // }, [getCategoryName]);



    // TO Show And Hide The Blocks Of Person Card
    const showDescri = (id, link) => {
        console.log("Inside Link = " + link);

        // dispatch(getPersonURL(link));

        const getElement = peopleArray.filter((curVal, index) => index !== id);
        getElement.map((curVal, index) => curVal.id).forEach((id) => document.getElementById(id).style.display = "none");

        document.getElementById(id).style.display = "block";
    }


    const dispatchBusiness = () => {
        console.log("Insidde Disptahcing Business");
        // dispatch(getCategory("Business"));
    };





    return <>



    </>
};

export default PersonCategoryList;
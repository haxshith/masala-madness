import React, { useEffect, useState } from "react";
import axios from 'axios';
import Detail from "../views/Detail";

const Random = () => {
    const [recipe, setRecipe] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [comment, setComment] = useState([]);
    const [loaded1, setLoaded1] = useState(false);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => {setRecipe(res.data.meals[0]); setLoaded(true)})
        .catch(err => console.log(err));

        axios.get(`http://localhost:8000/api/comments/${recipe.idMeal}`)
        .then(res => {setComment(res.data[0]); setLoaded1(true)})
        .catch(err => console.log(err));
    }, []);

    if(loaded && loaded1){
        return <Detail recipe={recipe} comment={comment}/>
    }
}

export default Random;
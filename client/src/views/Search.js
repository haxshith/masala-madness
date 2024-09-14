import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useNavigate, useParams} from 'react-router-dom';
import styles from '../css/Search.module.css';

const Search = () => {
    const {query} = useParams();
    const [recipeList, setRecipeList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    // search options
    const category = ['Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian'];
    const area = ['American', 'British', 'Canadian', 'Chinese', 'Croatian', 'Dutch', 'Egyptian', 'French', 'Greek', 'Indian', 'Irish', 'Italian', 'Jamaican', 'Japanese', 'Kenyan', 'Malaysian', 'Mexican', 'Moroccan', 'Polish', 'Portuguese', 'Russian', 'Spanish', 'Thai', 'Tunisian', 'Turkish', 'Unknown', 'Vietnamese'];
    const ingredient = ['Avocado', 'Bacon', 'Beef', 'Broccoli', 'Carrots', 'Cheese', 'Chicken', 'Cinnamon', 'Eggs', 'Greek Yogurt', 'Honey', 'Lamb', 'Lemon', 'Lettuce', 'Milk', 'Mint', 'Mushrooms', 'Orange', 'Pork', 'Potatoes', 'Rice', 'Salmon', 'Sausages', 'Spaghetti', 'Spinach', 'Tomatoes', 'Tuna', 'Zucchini'];
    // different url
    let url = '';
    if(query[0]==='s' || query[0]==='f'){
        url = 'https://www.themealdb.com/api/json/v1/1/search.php?'+query;
    } else if (query[0]==='t') {
        url = 'https://www.themealdb.com/api/json/v1/1/browse.php?'+query;
    } else {
        url = 'https://www.themealdb.com/api/json/v1/1/filter.php?'+query;
    }
    
    useEffect(() => {
        axios.get(url)
        .then(res => {
            if(res.data.meals === null) {
                setRecipeList([]);
            } else {
                setRecipeList(res.data.meals);
            }
            setLoaded(true)
        })
        .catch(err => console.log(err));
    }, [recipeList]);

    // search result
    function result() {
        if(recipeList.length === 0){
            return <p className="pt-3 fs-4">Sorry no results were found.</p>;
        } else {
            return(
                <div className={styles.searchRow}>
                    {loaded && recipeList.map((item, idx) => 
                        <div key={idx} className={styles.searchItem}>
                            <Link to={`/${item.idMeal}`}>
                                <img src={item.strMealThumb}/>
                                <h5>
                                    {item.strMeal}
                                    {/* <span><i className="fa-solid fa-eye"></i> 20</span> */}
                                </h5>
                            </Link>
                        </div>
                    )}
                    {/* If there're 2 items in the last line, it's ugly because of space-between, so adding a hidden searchItem to make it pretty. */}
                    {recipeList.length%3 === 2 ? <div className={styles.searchItem} style={{visibility:'hidden'}}></div> : ''}
                </div>
            );
        }
    }

    // search actions
    const searchHandle = e => {
        e.preventDefault();
        navigate(`/search/s=${e.target.searchWord.value}`);
        e.target.reset();
        e.target.nextSibling.value = '';
        e.target.nextSibling.nextSibling.value = '';
        e.target.nextSibling.nextSibling.nextSibling.value = '';
    }
    
    return(
        <div className={styles.searchContainer}>
            <div className="row">
                <div className='col col-3'>
                    <div className={styles.search}>

                        <form className="mb-4" onSubmit={searchHandle}>
                            <h3 className="mb-4">Search Recipe</h3>
                            <input type='text' placeholder="Search for a recipe" className="form-control" name='searchWord'/>
                        </form>

                        {/* don't know how to set other select empty when select one, use a stupid method: previousSibling/nextSibling */}
                        <select className="form-select rounded-pill mb-3" defaultValue='' 
                            onChange={e => {
                                    navigate(`/search/c=${e.target.value}`);
                                    e.target.nextSibling.value = '';
                                    e.target.nextSibling.nextSibling.value = '';
                                }}>
                            <option value='' disabled hidden>Category</option>
                            {category.map((item, idx) =>
                                <option key={idx} value={item}>{item}</option>
                            )}
                        </select>
                        <select className="form-select rounded-pill mb-3" defaultValue='' 
                            onChange={e => {
                                navigate(`/search/a=${e.target.value}`);
                                e.target.previousSibling.value = '';
                                e.target.nextSibling.value = '';
                            }}>
                            <option value='' disabled hidden>Cuisine</option>
                            {area.map((item, idx) =>
                                <option key={idx} value={item}>{item}</option>
                            )}
                        </select>
                        <select className="form-select rounded-pill" defaultValue='' 
                            onChange={e => {
                                navigate(`/search/i=${e.target.value}`);
                                e.target.previousSibling.value = '';
                                e.target.previousSibling.previousSibling.value = '';
                            }}>
                            <option value='' disabled hidden>Ingredient</option>
                            {ingredient.map((item, idx) =>
                                <option key={idx} value={item}>{item}</option>
                            )}
                        </select>
                        
                    </div>
                </div>

                <div className='col col-9'>
                    {result()}
                </div>
            </div>
            
        </div>
    );
};

export default Search;
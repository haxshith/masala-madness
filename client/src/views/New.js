import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from '../css/New.module.css';

const New = () => {
    const [recipe, setRecipe] = useState({});
    const [ingredientFields, setIngredientFields] = useState([
        {ingredient: '', amount: ''},
        {ingredient: '', amount: ''}
    ]);
    const [maxIngredient, setMaxIngredient] = useState(false);
    const navigate = useNavigate();
    // options
    const category = ['Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian'];
    const area = ['American', 'British', 'Canadian', 'Chinese', 'Croatian', 'Dutch', 'Egyptian', 'French', 'Greek', 'Indian', 'Irish', 'Italian', 'Jamaican', 'Japanese', 'Kenyan', 'Malaysian', 'Mexican', 'Moroccan', 'Polish', 'Portuguese', 'Russian', 'Spanish', 'Thai', 'Tunisian', 'Turkish', 'Unknown', 'Vietnamese'];

    // handle ingredient
    function handleIngredientChange(e, idx) {
        let changedIngredients = [...ingredientFields];
        changedIngredients[idx][e.target.name] = e.target.value;
        setIngredientFields(changedIngredients);
    }
    const addIngredient = e => {
        e.preventDefault();
        if(ingredientFields.length === 20){
            setMaxIngredient(true);
        } else {
            setIngredientFields([...ingredientFields, {ingredient: '', amount: ''}])
        }
    };
    const delIngredient = e => {
        e.preventDefault();
        let deletedIngredients = [...ingredientFields];
        deletedIngredients.pop();
        setIngredientFields(deletedIngredients);
        setMaxIngredient(false);
    }

    return(
        <div className={styles.newContainer}>
            <h2 className="text-center">Submit a Recipe</h2>
            <hr style={{FILTER:'alpha(opacity=100,finishopacity=0,style=2)'}} color='#987cb9' size='3'/>
            <form>
                <div className={styles.formRow}>
                    <label className={styles.formLabel}>Recipe Title</label>
                    <input type='text' className={styles.formInput}/>
                </div>

                <div className={styles.formRow}>
                    <label className={styles.formLabel}>Image</label>
                    <input type='file' className={styles.formInput}/>
                </div>

                <div className={styles.formRow}>
                    <label className={styles.formLabel} style={{verticalAlign:'top'}}>Ingredients</label>
                    <div style={{width:'77%', display:'inline-block'}}>
                        <div className="d-flex mb-2">
                            <div className={styles.ingredient}>Ingredient</div>
                            <div className={styles.amount}>Amount</div>
                        </div>
                        {ingredientFields.map((item, idx) => 
                            <div key={idx} className='d-flex mb-2'>
                                <div className={styles.ingredient}>
                                    <input className={`${styles.ingredientInput} ${styles.formInput}`} name='ingredient' value={item.ingredient} onChange={e => handleIngredientChange(e, idx)}/>
                                </div>
                                <div className={styles.amount}>
                                    <input className={`w-100 ${styles.formInput}`} name='amount' value={item.amount} onChange={e => handleIngredientChange(e, idx)}/>
                                </div>
                            </div>
                        )}
                        <button onClick={addIngredient} className={styles.ingredientBtn}>Add field</button>
                        <button onClick={delIngredient} className={styles.ingredientBtn}>Delete field</button>
                        <p className={styles.formDescrip} style={{marginLeft:0}}>{maxIngredient ? "There can only be a maximum of 20 ingredients." : ''}</p>
                    </div>
                </div>

                <div className={styles.formRow}>
                    <label className={styles.formLabel} style={{verticalAlign:'top'}}>Instructions</label>
                    <textarea rows='10' className={styles.formInput}></textarea>
                </div>

                <div className={styles.formRow}>
                    <label className={styles.formLabel}>Video URL</label>
                    <input type='text' className={styles.formInput}/>
                    <p className={styles.formDescrip}>For example: https://www.youtube.com/watch?v=2kl3Liy5jcQ</p>
                </div>
                <div className={styles.formRow}>
                    <label className={styles.formLabel}>Category</label>
                    <select className={styles.formInput} defaultValue=''>
                        <option value='' disabled hidden></option>
                        {category.map((item, idx) => <option key={idx}>{item}</option>)}
                    </select>
                </div>
                <div className={styles.formRow}>
                    <label className={styles.formLabel}>Cuisine</label>
                    <select className={styles.formInput} defaultValue=''>
                        <option value='' disabled hidden></option>
                        {area.map((item, idx) => <option key={idx}>{item}</option>)}
                    </select>
                </div>
                <div className={styles.formRow}>
                    <label className={styles.formLabel}>Tags</label>
                    <input type='text' className={styles.formInput}/>
                    <p className={styles.formDescrip}>Separate tags with commas. For example: stew, baking, beef</p>
                </div>
                <button id={styles['submitBtn']} type='submit'>Submit Recipe</button>
            </form>

        </div>
    );
};

export default New;
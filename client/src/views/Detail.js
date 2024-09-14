import React from "react";
import { Link } from "react-router-dom";
import styles from '../css/Detail.module.css';
import CommentForm from "../components/CommentForm";

const Detail = (props) => {
    const {strMeal, strMealThumb, strCategory, strArea, strTags, strInstructions, strYoutube} = props.recipe;

    // extract ingredient: combine strIngredientNum and trMeasureNum
    let ingredients = [];
    for(let key in props.recipe){
        if(key.includes('strIngredient')){
            if(props.recipe[key] !== null && props.recipe[key].length !== 0){
                ingredients.push({
                    ingredient: props.recipe[key], 
                    amount: props.recipe[`strMeasure${key.slice(13)}`]
                });
            }
        }
    }
    // instruction: convert \r\n or \r\n\r\n to <br>
    let instruction = strInstructions.replace(/\r\n\r\n/g, '<br/>').replace(/\r\n/g, '<br/>')
    // Youtube embed
    function youtube() {
        if(strYoutube===null || strYoutube.length===0){
            return ''
        } else {
            let youtubeEmbed = strYoutube.replace('watch?v=', 'embed/')
            return(
                <div className={styles.recipeYoutube}>
                    <div className={styles.youtubeBlock}>
                        <iframe src={youtubeEmbed} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            )
        }
    }
    // tag: string to array
    if(strTags !== null){
        var tagArr = strTags.split(',');
        tagArr = tagArr.filter(item => item.length!==0);
    }

    // comment
    // consider if there is no comment
    if(props.comment === undefined){
        var comment = [];
    } else {
        var {comment} = props.comment;
    }
    // change time format
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    function handleTime(time){
        var jsTime = new Date(time).getTime(); //convert mongoose time to js time
        var now = new Date().getTime();
        var diffVal = now - jsTime;
        var monthC = diffVal/month;
        var weekC = diffVal/(7*day);
        var dayC = diffVal/day;
        var hourC = diffVal/hour;
        var minC = diffVal/minute;
        if(monthC>=1){
            return parseInt(monthC) + ' months ago';
        } else if (weekC>=1){
            return parseInt(weekC) + ' weeks ago';
        } else if (dayC>=1){
            return parseInt(dayC) + ' days ago';
        } else if (hourC>=1){
            return parseInt(hourC) + ' hours ago';
        } else if (minC>=1){
            return parseInt(minC) + ' minutes ago';
        } else {
            return 'just now';
        }
    }

    return(
        <div className={styles.detailContainer}>
            
            <div className={styles.recipeHeader}>
                <div className={styles.headerImg}>
                    <div className={styles.imgBlock}>
                        <img src={strMealThumb}/>
                    </div>
                </div>
                <div className={styles.headerInfo}>
                    <h1 className="mb-3">{strMeal}</h1>
                    {/* <div className='mb-2'>
                        <a className={styles.icon}><i className="fa-solid fa-eye"></i> 3.8k</a>
                        <a href="#" className={styles.icon}><i className="fa-sharp fa-solid fa-heart"></i> 20</a>
                        <a href="#comment" className={styles.icon}><i className="fa-solid fa-comments"></i> 3</a>
                    </div> */}
                    <div className="mb-3">
                        <Link className={styles.headerCat} to={`/search/c=${strCategory}`}>{strCategory}</Link>
                        <Link className={styles.headerArea} to={`/search/a=${strArea}`}>{strArea}</Link>
                    </div>
                    <div>
                        { strTags===null ? '' : tagArr.map((item, idx) => 
                            <Link key={idx} className={styles.headerTag}>{item}</Link>
                        ) }

                    </div>
                </div>
            </div>

            {youtube()}

            <div className={styles.recipeInstruct}>
                <h3>Ingredients</h3>
                <ul>
                    {ingredients.map((item, idx) => 
                        <li key={idx}>{item.amount} <b>{item.ingredient}</b></li>
                    )}
                </ul>
                <h3>Instructions</h3>
                <div dangerouslySetInnerHTML={{__html: instruction}}/>
            </div>

            <div className={styles.recipeComment} id='comment'>
                <CommentForm len={comment.length} id={props.recipe.idMeal}/>
                <div>
                    <h4 className="mb-3">{comment.length} Comments</h4>
                    {comment.map((item, idx) => 
                        <div key={idx} className={styles.oneComment}>
                            <span className={styles.commentUser}>{item.name}</span>
                            <span className={styles.commentTime}>{handleTime(item.time)}</span>
                            <div className={styles.commentContent}>{item.content}</div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
    
};

export default Detail;
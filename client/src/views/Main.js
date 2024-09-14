import React from "react";
import { Link } from 'react-router-dom';
import styles from '../css/Main.module.css';

const Main = () => {
    return(
    <>
        <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

            <div className={`carousel-indicators ${styles.indicators}`}>
                <div data-bs-target="#carousel" data-bs-slide-to="0" className={`active ${styles.indicatorItem}`}>
                    <div className={styles.thumbnail} style={{backgroundImage:"url('/img/img1.jpg')"}}></div>
                </div>
                <div data-bs-target="#carousel" data-bs-slide-to="1" className={styles.indicatorItem}>
                    <div className={styles.thumbnail} style={{backgroundImage:"url('/img/img2.jpg')"}}></div>
                </div>
                <div data-bs-target="#carousel" data-bs-slide-to="2" className={styles.indicatorItem}>
                    <div className={styles.thumbnail} style={{backgroundImage:"url('/img/img3.jpg')"}}></div>
                </div>
                <div data-bs-target="#carousel" data-bs-slide-to="3" className={styles.indicatorItem}>
                    <div className={styles.thumbnail} style={{backgroundImage:"url('/img/img4.jpg')"}}></div>
                </div>
            </div>


            <div className="carousel-inner">
                <div className={`carousel-item active ${styles.carouselItem}`}>
                    <Link to='/52859'>
                        <div className={styles.imgMask}>
                            <img src='/img/img1.jpg' className={styles.showImg}/>
                        </div>
                        <div className={`carousel-caption ${styles.carouselCaption}`}>
                            <h1>Key Lime Pie</h1>
                            <p>
                                <Link to='/search/c=Dessert'>Dessert</Link>
                            </p>
                        </div>
                    </Link>
                </div>
                <div className={`carousel-item ${styles.carouselItem}`}>
                    <Link to='/52952'>
                        <div className={styles.imgMask}>
                            <img src='/img/img2.jpg' className={styles.showImg}/>
                        </div>
                        <div className={`carousel-caption ${styles.carouselCaption}`}>
                            <h1>Beef Lo Mein</h1>
                            <p>
                                <Link to='/search/c=beef'>Beef</Link>
                            </p>
                        </div>
                    </Link>
                </div>
                <div className={`carousel-item ${styles.carouselItem}`}>
                    <Link to='/52870'>
                        <div className={styles.imgMask}>
                            <img src='/img/img3.jpg' className={styles.showImg}/>
                        </div>
                        <div className={`carousel-caption ${styles.carouselCaption}`}>
                            <h1>Chickpea Fajitas</h1>
                            <p>
                                <Link to='/search/c=Vegetarian'>Vegetarian</Link>
                            </p>
                        </div>
                    </Link>
                </div>
                <div className={`carousel-item ${styles.carouselItem}`}>
                    <Link to='/52945'>
                        <div className={styles.imgMask}>
                            <img src='/img/img4.jpg' className={styles.showImg}/>
                        </div>
                        <div className={`carousel-caption ${styles.carouselCaption}`}>
                            <h1>Kung Pao Chicken</h1>
                            <p>
                                <Link to='/search/c=chicken'>Chicken</Link>
                            </p>
                            {/* show view and like here */}
                            {/* <p>
                                <i className="fa-solid fa-eye"></i> 3.8k
                                <i className="fa-sharp fa-solid fa-heart"></i> 20
                            </p> */}
                        </div>
                    </Link>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        <div className={styles.category}>
            <div className={styles.cat}>
                <Link to='/search/c=Dessert'>
                    <div className={styles.catBg} style={{backgroundImage:"url('/img/cat1.jpg')"}}></div>
                    <div className={styles.catName}><span>DESSERT</span></div>
                </Link>
            </div>
            <div className={styles.cat}>
                <Link to='/search/c=Beef'>
                    <div className={styles.catBg} style={{backgroundImage:"url('/img/cat2.jpg')"}}></div>
                    <div className={styles.catName}><span>BEEF</span></div>
                </Link>
            </div>
            <div className={styles.cat}>
                <Link to='/search/c=Seafood'>
                    <div className={styles.catBg} style={{backgroundImage:"url('/img/cat3.jpg')"}}></div>
                    <div className={styles.catName}>SEAFOOD<span></span></div>
                </Link>
            </div>
            <div className={styles.cat}>
                <Link to='/search/c=Pasta'>
                    <div className={styles.catBg} style={{backgroundImage:"url('/img/cat4.jpg')"}}></div>
                    <div className={styles.catName}><span>PASTA</span></div>
                </Link>
            </div>
            <div className={styles.cat}>
                <Link to='/search/s=salad'>
                    <div className={styles.catBg} style={{backgroundImage:"url('/img/cat5.jpg')"}}></div>
                    <div className={styles.catName}><span>SALAD</span></div>
                </Link>
            </div>
            <div className={styles.cat}>
                <Link to='/search/s=soup'>
                    <div className={styles.catBg} style={{backgroundImage:"url('/img/cat6.jpg')"}}></div>
                    <div className={styles.catName}><span>SOUP</span></div>
                </Link>
            </div>
            <div className={styles.cat}>
                <Link to='/search/c=Vegan'>
                    <div className={styles.catBg} style={{backgroundImage:"url('/img/cat7.jpg')"}}></div>
                    <div className={styles.catName}><span>VEGAN</span></div>
                </Link>
            </div>
        </div>

        <div className={styles.popRow}>
            <h1 className="text-center mb-5">Most Popular Recipes</h1>
            <div className="d-flex justify-content-center">
                <div className={styles.popItem}>
                    <Link to='/52960'>
                        <img src='/img/pop1.jpg'/>
                        <div className={styles.popText}>
                            <span>Salmon Avocado Salad</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.popItem}>
                    <Link to='/53064'>
                        <img src='/img/pop2.jpg'/>
                        <div className={styles.popText}>
                            <span>Fettuccine Alfredo</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.popItem}>
                    <Link to='/52861'>
                        <img src='/img/pop3.jpg'/>
                        <div className={styles.popText}>
                            <span>Peanut Butter Cheesecake</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

        <div className={styles.random}>
            <div className={styles.randomItem}>
                <Link to='/random'>
                    <img src="/img/random.jpg"/>
                    <h1>Try something randomly!</h1>
                </Link>
            </div>
        </div>

    </>
    );
};

export default Main;
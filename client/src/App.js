import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import styles from './css/Navbar.module.css';
import Main from './views/Main';
import Random from './components/Random';
import ById from './components/ById';
import Search from './views/Search';
// import New from './views/New';

function App() {
  const navigate = useNavigate();
  const searchHandle = e => {
    e.preventDefault();
    navigate(`/search/s=${e.target.searchWord.value}`);
    e.target.reset();
  }

  return (
    <div className='container-fluid p-0'>

      <nav className="navbar navbar-expand-lg px-5 py-4" style={{boxShadow: '0 8px 30px -6px rgb(0, 0, 0, 0.05)'}}>
        <div className="container-fluid align-items-end">
          <Link className="navbar-brand p-0" to='/'><h1 className={styles.navH1}>Foodie</h1></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                <Link className="nav-link active" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/search/f=b'>Recipes</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" to='/new'>Submit a Recipe</Link>
              </li> */}
            </ul>
            <form onSubmit={searchHandle}>
              <input className="form-control rounded-pill" type="search" placeholder="Search" name='searchWord'/>
            </form>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/:id' element={<ById/>}/>
        <Route path='/random' element={<Random/>}/>
        <Route path='/search/:query' element={<Search/>}/>
        {/* <Route path='/new' element={<New/>}/> */}
      </Routes>

      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button"><i className="fab fa-google"></i></a>
            <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="#!" role="button"><i className="fab fa-instagram"></i></a>
            <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="https://www.linkedin.com/in/jingwen-hu-097648232/" role="button"><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-outline-light btn-floating m-1 rounded-circle" href="https://github.com/MioHu" role="button"><i className="fab fa-github"></i></a>
          </section>
        </div>

        <div className="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>Copyright © 2022 Mio</div>
      </footer>

    </div>
  );
}

export default App;

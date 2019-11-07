import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Logo from '../img/home_logo.png';
import '../css/home.css';
export const Home = () => (
    <div className="home">
        <div className={"home__logo"}>
            <img src={Logo} alt="home_logo.png" className={"home__logo__img"}/>
            <h2 className={"home__logo__text"}>KlusPlus</h2>
        </div>
        <div className={"home__links"}>
            <Link className={"home__links__button button"} to={"/register"}>
                <Button>DIRECT REPARATIE AANVRAGEN</Button>
            </Link>
            <Link className={"home__links__overview"} to={"/alltickets"}>Overzicht</Link>
        </div>
    </div>
);
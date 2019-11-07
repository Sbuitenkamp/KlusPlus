import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../css/overview.css';
export const Overview = () => (
    <div className="overview">
        <h1 className="overview__title">OVERZICHT VAN REPARATIE</h1>
        <form className="overview__form">
            <div className="overview__form__input">
                Categorie
                <input disabled className="overview__form__input__value" type="text" name="category"/>
            </div>
            <div className="overview__form__input">
                Omschrijving
                <input disabled className="overview__form__input__value" type="text" name="description"/>
            </div>
            <div className="overview__form__date">
                Wanneer<br/>
                <input disabled className="overview__form__date__value" type="date" name="date"/>
                <input className="overview__form__date__value" type="text" name="time" disabled/>
            </div>
        </form>
        <div className="overview__links">
            <Link className={"overview__links__back"} to={"/addorder"}>
                <Button>Terug</Button>
            </Link>
            <Link className={"overview__links__forward button"} to={"/alltickets"}>
                <Button>VERDER</Button>
            </Link>
        </div>
    </div>
);
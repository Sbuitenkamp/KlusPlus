import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../css/addorder.css';
export const AddOrder = () => (
    <div className="add-order">
        <h1 className="add-order__title">AANMELDEN VAN REPARATIE</h1>
        <form className="add-order__form">
            <div className="add-order__form__input">
                Categorie
                <input className="add-order__form__input__value" type="text" name="category"/>
            </div>
            <div className="add-order__form__input">
                Omschrijving
                <input className="add-order__form__input__value" type="text" name="description"/>
            </div>
            <div className="add-order__form__input">
                Wanneer komt het u het beste uit?
                <input className="add-order__form__input__value" type="date" name="date"/>
            </div>
            <div className="add-order__form__input">
                <select className="add-order__form__input__value" name="time">
                    <option className="add-order__form__input__value__option" value="'s Ochtends">'s Ochtends</option>
                    <option className="add-order__form__input__value__option" value="'s Middags">'s Middags</option>
                    <option className="add-order__form__input__value__option" value="Hele Dag">Hele Dag</option>
                </select>
            </div>
        </form>
        <div className="add-order__links">
            <Link className={"add-order__links__back"} to={"/register"}>
                <Button>Terug</Button>
            </Link>
            <Link className={"add-order__links__forward button"} to={"/overview"}>
                <Button>VERDER</Button>
            </Link>
        </div>
    </div>
);
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../css/register.css';
export const Register = () => (
    <div className="register">
        <h1 className="register__title">UW GEGEVENS</h1>
        <form className="register__form">
            <div className="register__form__input">
                Voornaam
                <input className="register__form__input__value" type="text" name={"firstName"}/>
            </div>
            <div className="register__form__input">
                Achternaam
                <input className="register__form__input__value" type="text" name={"lastName"}/>
            </div>
            <div className="register__form__input">
                Postcode
                <input className="register__form__input__value" type="text" name={"zipCode"}/>
            </div>
            <div className="register__form__input">
                Straat + Huisnummer
                <input className="register__form__input__value" type="text" name={"street"}/>
            </div>
            <div className="register__form__input">
                E-mail
                <input className="register__form__input__value" type="text" name={"email"}/>
            </div>
            <div className="register__form__input">
                Telefoonnummer
                <input className="register__form__input__value"  type="text" name={"phone"}/>
            </div>
            <div className="register__form__checkbox">
                <input className="register__form__checkbox__value" type="checkbox" name={"remember"}/>
                <p className="register__form__checkbox__text">Gegevens onthouden</p>
            </div>
        </form>
        <div className="register__links">
            <Link className={"register__links__back"} to={"/"}>
                <Button>Terug</Button>
            </Link>
            <Link className={"register__links__forward button"} to={"/addorder"}>
                <Button>VERDER</Button>
            </Link>
        </div>
    </div>
);
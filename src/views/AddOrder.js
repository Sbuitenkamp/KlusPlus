import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../css/addorder.css';
export const AddOrder = () => (
    <div className="add-order">
        <div className="add-order__links">
            <Link className={"add-order__links__back"} to={"/register"}>
                <Button>Terug</Button>
            </Link>
            <Link className={"add-order__links__forward button"} to={"/addorder"}>
                <Button>VERDER</Button>
            </Link>
        </div>
    </div>
);
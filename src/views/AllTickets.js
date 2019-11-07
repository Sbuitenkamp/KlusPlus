import React from 'react';
import { Link } from 'react-router-dom';
import { Data } from '../models/data'
import '../css/alltickets.css';
export const AllTickets = () => (
    <div className="all-tickets">
        <div className="all-tickets__header">
            <Link className={"all-tickets__header__arrow"} to={"/"}>
                <i className="fa fa-arrow-left"></i>
            </Link>
            <h1 className="all-tickets__header__title">ALLE TICKETS</h1>
        </div>
    </div>
);
import React from 'react';
import { Link } from 'react-router-dom';
import { Data } from '../models/data'
import '../css/alltickets.css';
export const AllTickets = () => {
    const { tickets } = Data;
    let list = "";
    for (const ticket of tickets) {
        list += `
            <li class="all-tickets__content__list__item">
                <div class="all-tickets__content__list__item__content">
                    <h2 class="all-tickets__content__list__item__content__description">${ticket.description}</h2>
                    <p class="all-tickets__content__list__item__content__first-name">${ticket.customer.firstName} ${ticket.customer.lastName}</p>
                    <p class="all-tickets__content__list__item__content__category">${ticket.category}</p>
                    <p class="all-tickets__content__list__item__content__date">${ticket.date}</p>
                    <p class="all-tickets__content__list__item__content__time">${ticket.time}</p>
                    <p class="all-tickets__content__list__item__content__status">${ticket.status}</p>
                </div>
            </li>
        `.trim();
    }
    return (
        <div className="all-tickets">
            <div className="all-tickets__header">
                <Link className="all-tickets__header__arrow all-tickets__header__arrow--left" to="/">
                    <i className="fa fa-arrow-left"></i>
                </Link>
                <h1 className="all-tickets__header__title">ALLE TICKETS</h1>
                <Link className="all-tickets__header__arrow all-tickets__header__arrow--right" to="/allcustomers">
                    <i className="fa fa-arrow-right"></i>
                </Link>            </div>
            <div className="all-tickets__content">
                <ul className="all-tickets__content__list" dangerouslySetInnerHTML={{__html: list}}></ul>
            </div>
        </div>
    );
};
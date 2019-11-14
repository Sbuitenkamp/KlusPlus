import React from 'react';
import { Link } from 'react-router-dom';
import { Data } from '../models/data'
import '../css/allcustomers.css';
export const AllCustomers = ({ match }) => {
    const { customers } = Data;
    if (match.params.id) {
        const customer = customers.filter(x => x.id.toString() === match.params.id)[0];
        const customerDiv = `
            <div class="customer__header">
                <a class="customer__header__arrow" href="/allcustomers">
                    <i class="fa fa-arrow-left"></i>
                </a>
                <h1 class="customer__header__title">KLANT GEGEVENS</h1>
            </div>            
            <div class="customer__details">
                <h2 class="customer__details__name">${customer.firstName} ${customer.lastName}</h2>
                <h3 class="customer__details__address">${customer.zipCode} ${customer.street}</h3>
                <h3 class="customer__details__email">${customer.email}</h3>
                <h3 class="customer__details__phone">${customer.phone}</h3>
            </div>
        `.trim();
        return (
            <div className="customer" dangerouslySetInnerHTML={{__html: customerDiv}}></div>
        );
    } else {
        let list = "";
        for (const customer of customers) {
            list += `
            <li class="all-customers__content__list__item">
                <a class="all-customers__content__list__item__content" href="/allcustomers/${customer.id}">
                    <h2>${customer.firstName} ${customer.lastName}</h2>
                    <p>${customer.email}</p>
                    <p>${customer.phone}</p>
                </a>
            </li>
        `.trim();
        }
        return (
            <div className="all-customers">
                <div className="all-customers__header">
                    <Link className="all-customers__header__arrow" to="/alltickets">
                        <i className="fa fa-arrow-left"></i>
                    </Link>
                    <h1 className="all-customers__header__title">ALLE KLANTEN</h1>
                </div>
                <div className="all-customers__content">
                    <ul className="all-customers__content__list" dangerouslySetInnerHTML={{__html: list}}></ul>
                </div>
            </div>
        );
    }
};
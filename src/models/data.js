import { Ticket } from "./Ticket";
import { Customer } from "./Customer";

// yes they all have the same date
const date = new Date();
const customers = [
    new Customer( 1, 'Teshale', 'Noorman', '6669 LL', 'Fake Street', 'teshale@nc.thnoorman.com', '06 11122233'),
    new Customer( 2, 'Khalid', 'Dahir', '6969 NI', 'Onder de Brugstraat', 'khalid@spicy-foods.com', '06 88887777'),
    new Customer( 3, 'Jurjen', 'Veenstra', '7069 KU', 'Het Gat', 'jurjen@dj.com', '06 2222333344'),
    new Customer( 4, 'Steven', 'Buitenkamp', '2358 LX', 'Dikkelaan', 'steven@developer.com', '06 77684132')
];

// this works for the mockdata purposes ¯\_(ツ)_/¯
const tickets = [
    new Ticket(1, customers[0], 'keuken', 'keuken plaatsen', `${date.getDate()}/${date.getMonth()}`, '\'s Middags', 'open'),
    new Ticket(2, customers[1], 'sanitair', 'wc repareren', `${date.getDate()}/${date.getMonth()}`, '\'s Ochtends', 'open'),
    new Ticket(3, customers[2], 'sanitair', 'badkuip vervangen',`${date.getDate()}/${date.getMonth()}`, '\'s Ochtends', 'open'),
    new Ticket(4, customers[3], 'sanitair', 'leiding verstopt',`${date.getDate()}/${date.getMonth()}`, 'Hele Dag', 'open')
];

export const Data = {
    customers,
    tickets
};
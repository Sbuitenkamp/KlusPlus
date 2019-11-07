import { Ticket } from "./Ticket";
import { Customer } from "./Customer";

const customers = [
    new Customer('Teshale', 'Noorman', '6669 LL', 'Fake Street', 'teshale@nc.thnoorman.com', '06 11122233'),
    new Customer('Khalid', 'Dahir', '6969 NI', 'Onder de Brugstraat', 'khalid@spicy-foods.com', '06 88887777'),
    new Customer('Jurjen', 'Veenstra', '7069 KU', 'Het Gat', 'jurjen@dj.com', '06 2222333344'),
    new Customer('Steven', 'Buitenkamp', '2358 LX', 'Dikkelaan', 'steven@developer.com', '06 77684132'),
];

const tickets = [
    new Ticket(customers[0], 'keuken', 'keuken plaatsen', new Date(), '\'s Middags'),
    new Ticket(customers[1], 'sanitair', 'wc repareren', new Date(), '\'s Ochtends'),
    new Ticket(customers[2], 'sanitair', 'badkuip vervangen', new Date(), '\'s Ochtends'),
    new Ticket(customers[3], 'sanitair', 'leiding verstopt', new Date(), 'Hele Dag'),
];

export const Data = {
    customers,
    tickets
};
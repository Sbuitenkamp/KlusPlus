export class Ticket
{
    customer;
    category;
    description;
    date;
    time;

    constructor(customer, category, description, date, time)
    {
        this.customer = customer;
        this.category = category;
        this.description = description;
        this.date = date;
        this.time = time;
    }
}
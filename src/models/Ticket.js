export class Ticket
{
    id;
    customer;
    category;
    description;
    date;
    time;
    status;

    constructor(id, customer, category, description, date, time, status)
    {
        this.id = id;
        this.customer = customer;
        this.category = category;
        this.description = description;
        this.date = date;
        this.time = time;
        this.status = status;
    }
}
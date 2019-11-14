export class Customer
{
    id;
    firstName;
    lastName;
    zipCode;
    street;
    email;
    phone;

    constructor(id, firstName, lastName, zipCode, street, email, phone)
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.zipCode = zipCode;
        this.street = street;
        this.email = email;
        this.phone = phone;
    }
}
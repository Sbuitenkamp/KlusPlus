export class Customer
{
    firstName;
    lastName;
    zipCode;
    street;
    email;
    phone;

    constructor(firstName, lastName, zipCode, street, email, phone)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.zipCode = zipCode;
        this.street = street;
        this.email = email;
        this.phone = phone;
    }
}
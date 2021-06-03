class AddressBook
{
    constructor(...params)
    {
        //defining first name, last name, address , city, state, zip, phone number and email
        this.firstName= params[0];
        this.lastName= params[1];
        this.address= params[2];
        this.city= params[3];
        this.state= params[4];
        this.zip= params[5];
        this.phoneNumber= params[6];
        this.email= params[7];
    }
    toString()
    {
        return "first Name: "+this.firstName+", last Name: "+this.lastName+", Address: "+ this.address+", City: "+ this.city+", State: "+this.state+", Zip: "+this.zip+", Phone Number: "+this.phoneNumber+", email: "+this.email; 
    }
}
       //Creating object for class Address book with parameters for constructor
        let addressBookObject= new AddressBook("Nilima","Wadal","Atpost","Akola","Maharashtra","444200","9898977099","nilima@gmail.com");
        console.log(addressBookObject.toString());
        
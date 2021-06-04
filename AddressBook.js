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
     //getter and setter for first name
     get firstName(){return this._firstName;}
     set firstName(firstName)
     {
         let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
         if(nameRegex.test(firstName))
             this._firstName= firstName;
         else throw "Invalid first Name";
     }
     //getter and setter for last name
    get lastName(){return this._lastName;}
    set lastName(lastName)
    {
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(lastName))
            this._lastName= lastName;
        else throw "Invalid last Name";
    }
    //getter and setter for address
    get address(){return this._address;}
    set address(address)
    {
        let addressRegex= RegExp('^[A-Z0-9a-z]{4,}$');
        if(addressRegex.test(address))
            this._address= address;
        else throw "Incorrect Address";
    }
    //getter and setter for city
    get city(){return this._city;}
    set city(city)
    {
        let cityRegex= RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(cityRegex.test(city))
            this._city= city;
        else throw "Incorrect city";
    }
    //getter and setter for state
    get state(){return this._state;}
    set state(state)
    {
        let stateRegex= RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(stateRegex.test(state))
            this._state= state;
        else throw "Incorrect State";
    }
    //getter and setter for zip
    get zip(){return this._zip;}
    set zip(zip)
    {
        let zipRegex= RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        if(zipRegex.test(zip))
            this._zip= zip;
        else throw "Incorrect zip";
    }
    //getter and setter for phoneNumber
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber)
    {
        let phoneNumberRegex= RegExp('^[7-9]{1}[0-9]{9}$');
        if(phoneNumberRegex.test(phoneNumber))
            this._phoneNumber= phoneNumber;
        else throw "Incorrect phone number";   
    }
    //getter and setter for email
    get email(){return this._email;}
    set email(email)
    {
        let emailRegex= RegExp('^[a-z]{1}[a-z0-9]{2,}([._+-]?[a-z0-9]+)?[@]{1}[a-z1-9]+[.]{1}(co|net|com|gov)([.]{1}[a-z]{2,3})?$')
        if(emailRegex.test(email))
            this._email= email;
        else throw "Invalid Email";
    }
    toString()
    {
        return "first Name: "+this.firstName+", last Name: "+this.lastName+", Address: "+ this.address+", City: "+ this.city+", State: "+this.state+", Zip: "+this.zip+", Phone Number: "+this.phoneNumber+", email: "+this.email; 
    }
}
try
{
    //Creating object for class Address book with parameters for constructor
    let addressBookObject= new AddressBook("Nilima","Wadal","Atpost","Akola","Maharashtra","444202","9898977099","nilima@gmail.com");
    console.log(addressBookObject.toString());

}
catch(ex)
{
    console.error(ex);
}

//UC3--Defining an Address book and storing address
let addressArr=new Array();
try
{
    let address1 = new AddressBook("Ritesh","Shelke","Atpost","Akola","Maharashtra","444202","9898977099","ritesh@gmail.com");
    let address2 = new AddressBook("Mogli","Zha","Hgtat","Uttar","Maharashtra","444777","9898937099","mogli@gmail.com");
    let address3 = new AddressBook("Tanu","Bunde","Caadp","Pradesh","Maharashtra","445678","9896370099","tanu@gmail.com");
    let address4 = new AddressBook("Rani","Pagrut","Bldana","Mumbai","Maharashtra","447898","9998977099","rani@gmail.com"); 
    addressArr.push(address1);
    addressArr.push(address2);
    addressArr.push(address3);
    addressArr.push(address4);
    console.log(addressArr);
}
catch(e)
{
    console.error(e);
}

//UC4 Searching an adress by using the first name
function SearchName(addressbook)
{
    if(addressbook.firstName=="Rani")
    return addressbook;

}
let searchResult=addressArr.find(SearchName);
console.log("Result after searching " +searchResult);
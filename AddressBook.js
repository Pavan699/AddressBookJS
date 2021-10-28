class AddressBookJs{

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
      }

      get firstName() { return this._firstName; }
      set firstName(firstName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$"); //first letter should be capital and min 3 letters
        if (nameRegex.test(firstName))
          this._firstName = firstName;
        else
          throw "Invalid first Name";
      }  
      
      get lastName() { return this._lastName; }
      set lastName(lastName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(lastName))
          this._lastName = lastName;
        else
          throw "Invalid last Name";
      }
      
      get address() { return this._address; }
      set address(address) {
        let addressRegex = RegExp('^[0-9 A-Z]{1}[A-Z a-z 0-9]{1,}$');  //minimum four characters
        if (addressRegex.test(address))
          this._address = address;
        else
          throw "Invalid address ";
      }
         
      get city() { return this._city; }
      set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$"); //minimum four characters
        if (cityRegex.test(city))
          this._city = city;
        else
          throw "Invalid city ";
      }
      
      get state() { return this._state; }
      set state(state) {
        let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
        if (stateRegex.test(state))
          this._state = state;
        else
          throw "Invalid state";
      }
     
      get zip() { return this._zip; }
      set zip(zip) {
        let zipRegex = RegExp("^[1-9]{3}[ ]*[0-9]{3}$");  //pin code of form 400 088 or 400088
        if (zipRegex.test(zip))
          this._zip = zip;
        else
          throw "Invalid zip ";
      }
      
      get phoneNumber() { return this._phoneNumber; }
      set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$"); //phone number should be of form 91 1234567891
        if (phoneRegex.test(phoneNumber))
          this._phoneNumber = phoneNumber;
        else
          throw "Invalid phone number";
      }
      
      get email() { return this._email; }
      set email(email) {                              //ac.xyz@gmail.com.in .xyz and .in are optional
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
          this._email = email;
        else
          throw "Invalid email";
      }
    
      toString() {
        return "first Name: " + this.firstName + ", last Name: " + this.lastName + ", Address: " + this.address + ", City: " + this.city
        + ", State: " + this.state + " Zip: " + this.zip + ", PhoneNumber: " + this.phoneNumber + ", email: " + this.email;   
      }
    }

    //adding contact details to array 
    let contactDetailsArray = new Array();
    try
    {
        contactDetailsArray.push(new AddressBookJs("Pavan", "Nakate", "Angar", "Solapur", "Maharashtra", "413214","91 9960252514", "pavan699@gmail.com"));
        contactDetailsArray.push(new AddressBookJs("Dada", "Mane", "Angar", "Solapur", "Maharashtra","955654", "91 9632587412", "dada03@gmail.com"));  
    }
    catch(e)
    {
      console.error(e);
    }
    Display();

    function Display()
    {
      contactDetailsArray.forEach((contact) => console.log(contact.toString()));
    }
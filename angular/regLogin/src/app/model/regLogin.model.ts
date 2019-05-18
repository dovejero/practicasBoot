export class regLoginModel {
    name: string;
    surname: string;
    username: string;
    password: string;
    password2: string;
    mail: string;
    address: string;
    age: string

    constructor(name: string, surname: string, username: string, password: string, password2: string, mail: string, address: string, age: string) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
        this.password2 = password2;
        this.mail = mail;
        this.address = address;
        this.age = age;
    }

}
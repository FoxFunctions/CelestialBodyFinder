export class User{
    id : number;
    name : string;
    city : string;
    state : string;
    
    constructor (id : number, name : string, city : string, state : string){
        this.id = id;
        this.name = name;
        this.city = city; 
        this.state = state;
    }
}
export class Place{
    title:string;
    pays?:string;
    ville?:string;
    timestamp?:number;
    motCle?:string;
    location?:{
        longitude:number,
        latitude:number
    };
    selected?:boolean;

}
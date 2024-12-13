export interface IProduct{
    id:number;
    name:string;
    imageUrl:string;
    price: number;
}

export class Product implements IProduct{
    constructor(
        public id: number
        ,public name: string
        ,public imageUrl: string
        ,public price: number
    ){
    }
}
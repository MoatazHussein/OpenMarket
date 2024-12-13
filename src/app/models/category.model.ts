export interface ICategory{
    id:number;
    name:string;
    imageUrl:string;
}

export class Category implements ICategory{
    constructor(
        public id: number
        ,public name: string
        ,public imageUrl: string
        ,public subCategories?: ICategory[]
    ){
    }
}
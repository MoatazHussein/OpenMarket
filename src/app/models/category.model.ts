export interface Category{
    id: number;
    name?: string;
    imageUrl?: string;
    subCategories?: Category[];
    nameEn?: string;
}
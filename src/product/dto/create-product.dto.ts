import {IsNotEmpty,IsInt} from 'class-validator'

export class CreateProductDto{
   
    @IsNotEmpty({message: 'Ürün Adı Boş Olamaz'})
    productName:string;

    @IsNotEmpty({message: 'Ürün Açıklaması Boş Olamaz'})
    description:string;

    @IsInt({message: 'Ürün Formatı Yanlış'})
    @IsNotEmpty({message: 'Ürün Fiyatı Boş Olamaz'})
    price:number;
}
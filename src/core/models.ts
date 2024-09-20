interface userModels{
    userName:string | null,
    email:string | null,
    password:string,
    phoneNumber:string | null,
    profileURL:string | null,
    isAdmin:boolean
}
const ProductType = [
    'SOCCER', 'RUNNING', 'SNEAKERS', 'WALKING', 'BAGS', 'CLOTHING', 'BASKETBALL', 'FOOTBALLS', 'HATS'
]
interface ProductTypeModels{
    typeName:string,
    imageList:Array<string>,
    description?:string
}

type CreateProductModel= {
    productName: string;
    title: string;
    description: string;
    mainCategory: string;
    subCategory1: string;
    subCategory2: string;
    discount: number | 0;
    colors: Array<{
      colorName: string;
      colorCustom:string;
      imageURLs: Array<{fileName:string,url:string}>;
      sizes: Array<{
        sizeValue: number | 0;
        price: number | 0;
        discount: number | 0;
      }>;
    }>;
  };
  type PartialColors = CreateProductModel & {
    colors?: Array<Partial<CreateProductModel['colors'][number]>>;
  };
export { ProductType };
export type{userModels,ProductTypeModels,CreateProductModel, PartialColors}
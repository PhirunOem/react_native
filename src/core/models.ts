interface userModels{
    name:string,
    email:string,
    password:string,
    phoneNumber:string,
    profile:string,
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

export {ProductType}
export type{userModels,ProductTypeModels}
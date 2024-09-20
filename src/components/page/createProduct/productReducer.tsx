import {CreateProductModel} from '../../../core';
import React, {Reducer, useReducer} from 'react';

const initialState: CreateProductModel = {
  // Initial all properties of create product model to ensure that data is clean and ready to insert to database
  productName: '',
  title: '',
  description: '',
  discount: 0,
  mainCategory: '',
  subCategory1: '',
  subCategory2: '',
  colors: [
    {
      colorName: '',
      colorCustom: '',
      imageURLs: [],
      sizes: [{sizeValue: 0, price: 0, discount: 0}],
    },
  ],
};
// type ActionTypes =
//   | 'setProductName'
//   | 'setProductTitle'
//   | 'setProductDiscount'
//   | 'setDescription'
//   | 'setMainCategory'
//   | 'setSubCategory1'
//   | 'setSubCategory2'
//   | 'setColors'
//   | 'setSizes';
interface SetProductName {
  type: 'setProductName';
  payload: {productName: string};
}
interface SetTitle {
  type: 'setTitle';
  payload: {title: string};
}
interface SetDiscount {
  type: 'setDiscount';
  payload: {discount: number};
}
interface SetDescription {
  type: 'setDescription';
  payload: {description: string};
}
interface SetMainCategory {
  type: 'setMainCategory';
  payload: {mainCategory: string};
}
interface SetSubCategory1 {
  type: 'setSubCategory1';
  payload: {subCategory1: string};
}
interface SetSubCategory2 {
  type: 'setSubCategory2';
  payload: {subCategory2: string};
}
interface SetColors {
  type: 'setColors';
  payload: {
    colorName: string;
    colorCustom: string;
    imageURLs: [];
    sizes: [{sizeValue: number; discount: number; price: number}];
  };
}
interface SetImageURLs {
  type: 'setImageURL';
  payload: {
    imageURLs: [];
    colorIndex: number;
  };
}
interface SetSizes {
  type: 'setSize';
  payload: {
    colorIndex: number;
    sizeIndex: number;
    sizeValue: number;
    discount: number;
    price: number;
  };
}

type Actions =
  | SetProductName
  | SetTitle
  | SetDescription
  | SetMainCategory
  | SetDiscount
  | SetSubCategory1
  | SetSubCategory2
  | SetColors
  | SetImageURLs
  | SetSizes;
const productReducer = (
  state: CreateProductModel,
  action: Actions,
): CreateProductModel => {
  switch (action.type) {
    case 'setProductName':
      return {
        ...state,
        productName: action.payload.productName,
      };
    case 'setTitle':
      return {...state, title: action.payload.title};
    case 'setDiscount':
      return {...state, discount: action.payload.discount};
    case 'setDescription':
      return {...state, description: action.payload.description};
    case 'setMainCategory':
      return {...state, mainCategory: action.payload.mainCategory};
    case 'setSubCategory1':
      return {...state, subCategory1: action.payload.subCategory1};
    case 'setSubCategory2':
      return {...state, subCategory2: action.payload.subCategory2};
    //:::::::::::::::::::::: set color :::::::::::::::::::::
    case 'setColors':
      return {
        ...state,
        colors: [
          ...state.colors,
          {
            colorCustom: action.payload.colorCustom,
            colorName: action.payload.colorName,
            imageURLs: action.payload.imageURLs,
            sizes: action.payload.sizes,
          },
        ],
      };
    //::::::::::::::::::::::: set image url ::::::::::::::::::
    case 'setImageURL':
      const updateColors = state.colors.map((color, index) => {
        if (action.payload.colorIndex == index) {
          return {...color, imageURLs: action.payload.imageURLs};
        }
        return {...color};
      });
      return {
        ...state,
        colors: updateColors,
      };
    //:::::::::::::::::: set size :::::::::::::::::
    case 'setSize':
      const updateColor = state.colors.map((color, index) => {
        if (action.payload.colorIndex == index) {
          const updateSize = color.sizes.map((size, sizeIndex) => {
            if (action.payload.sizeIndex == sizeIndex) {
              return {
                sizeValue: action.payload.sizeValue,
                discount: action.payload.discount,
                price: action.payload.price,
              };
            }
            return size;
          });
          return {...color, sizes: updateSize};
        }
        return color;
      });
      return {...state, colors: updateColor};
    //::::::::::: default case :::::::::::::
    default:
      return state;
  }
};
//return state and its function to component which called, so that component can use all function we define and updated state
const useProductReducer = () => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialState,
  );
  return [productState, productDispatch] as const; //ensures you get a strongly-typed tuple, where productState holds the current state, and productDispatch allows dispatching actions to modify that state. This provides better type safety and prevents accidental misuse in your components.
};
export {useProductReducer};

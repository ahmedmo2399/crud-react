import {v4 as uuid} from "uuid";
import { IProduct } from "../interfaces";
export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Casual T-Shirt",
    description: "Comfortable cotton t-shirt with high quality",
    imageURL: "banner-5.png",
    price: "199",
    colors: ["#FF0000", "#0000FF", "#000000"], 
    category: {
      name: "Clothing",
      imageURL: "banner-5.png"
    }
  },
  {
    id: uuid(),
    title: "Smart Watch",
    description: "Water-resistant smartwatch with long battery life",
    imageURL: "banner-5.png",
    price: "499",
    colors: ["#C0C0C0", "#FFD700", "#000000"], 
    category: {
      name: "Electronics",
      imageURL: "banner-5.png"
    }
  },
  {
    id: uuid(),
    title: "Running Shoes",
    description: "Comfortable shoes for running and long walks",
    imageURL: "banner-5.png",
    price: "299",
    colors: ["#FFFFFF", "#808080", "#0000FF"],  
    category: {
      name: "Footwear",
      imageURL: "banner-5.png"
    }
  },
  {
    id: uuid(),
    title: "Running Shoes",
    description: "Comfortable shoes for running and long walks",
    imageURL: "banner-5.png",
    price: "299",
    colors: ["#FFFFFF", "#808080", "#0000FF"],  
    category: {
      name: "Footwear",
      imageURL: "banner-5.png"
    }
  },
  {
    id: uuid(),
    title: "Running Shoes",
    description: "Comfortable shoes for running and long walks",
    imageURL: "banner-5.png",
    price: "299",
    colors: ["#FFFFFF", "#808080", "#0000FF"],  
    category: {
      name: "Footwear",
      imageURL: "banner-5.png"
    }
  },
  {
    id: uuid(),
    title: "Running Shoes",
    description: "Comfortable shoes for running and long walks",
    imageURL: "banner-5.png",
    price: "299",
    colors: ["#FFFFFF", "#808080", "#0000FF"],  
    category: {
      name: "Footwear",
      imageURL: "banner-5.png"
    }
  },
  {
    id: uuid(),
    title: "Running Shoes",
    description: "Comfortable shoes for running and long walks",
    imageURL: "banner-5.png",
    price: "299",
    colors: ["#FFFFFF", "#808080", "#0000FF"],  
    category: {
      name: "Footwear",
      imageURL: "banner-5.png"
    }
  },
  
];
export type { IProduct };


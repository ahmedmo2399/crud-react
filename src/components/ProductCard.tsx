import { IProduct } from "../interfaces";
import Image from "./Image";
import Button from "./ui/Button";
import { textSlicer } from "./utils/functions";

interface IProps {
  product:IProduct
   onClick?: () => void;
}

const ProductCard = ({product}: IProps) => {
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image
        ImageUrl={product.imageURL}
        alt={"Product Name"}
        className="rounded-md h-52 w-full mb-1 lg:object-cover"
      />
      <h3>{product.title}</h3>
      <p>{textSlicer(product.description)}</p>

      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-black rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-green-300 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-blue-300 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span>{product.price}</span>
        <Image
          ImageUrl={product.category.imageURL}
          alt={product.category.name}
          className="rounded-full object-center h-10 w-10 mb-1"
        />
      </div>
      <div className="flex items-center justify-between space-x-3 mt-4">
        
        <Button  className="bg-green-600 ">EDIT</Button>
        <Button className="bg-red-700 ">DELETE</Button>
        <Button className="bg-blue-700 ">LOADING</Button>
      </div>
    </div>
  );
};

export default ProductCard;

import { useState } from 'react';
import ProductCard from './components/ProductCard'
import Model from './components/ui/Model'
import { productList } from './data'
import Button from './components/ui/Button';
function App() {
  const renderProductList=productList.map(product=><ProductCard key={product.id} product={product}/>)
   const [isOpen, setIsOpen] = useState(false);
       function openModel() {
         setIsOpen(true);
       }
  
       function closeModel() {
         setIsOpen(false);
       }
  return (
    <main className='container mx-auto'>
      <Button className="bg-green-600 " onClick={openModel}>Add</Button>
    <div className='m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-md'>
    {renderProductList}
    </div>
    <Model isOpen={isOpen} closeModel={closeModel} title='Add A New Product'>
      <div className='flex items-center space-x-3'>
      <Button className="bg-green-600 ">Submit</Button>
      <Button className='bg-red-400 ' onClick={closeModel}>Cancel</Button>
      </div>
    </Model>
    </main>
  )
}

export default App

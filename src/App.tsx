import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { addProduct, deleteProducts, getProducts } from './api/product'
import { IProduct } from './interfaces/product'
import AddProduct from './pages/addProduct'
function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    const getAll = async () => {
      const { data } = await getProducts();
      setProducts(data)
    }
    getAll()
  }, [])
  const removeProduct = (id: string | number) => {
    // console.log(id);
    deleteProducts(id)
  }
  const onHandleSubmit = async (product: IProduct) => {
    const { data } = await addProduct(product);
    console.log(data);
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          products.map((product, index) => <div key={index}>{product.name}<span>Price:{product.price}</span><button onClick={() => removeProduct(product._id)}>Remove</button></div>)
        }></Route>
        <Route path='/add' element={<AddProduct onadd={onHandleSubmit} />}></Route>
        <Route path='/about' element="Gioi thieu"></Route>
        <Route path='/signin' element="Dang nhap"></Route>
      </Routes>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react';
import { api } from '../../api';
import CardProduct from '../../components/CardProduct';
import { Container } from './styled';

function ListProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function loadProducts() {
      const products = await api.get('/products')
      setProducts(products.data)
    }
    loadProducts()
  }, [])



  return (
    <Container>
      {
        products.map((product) => (
          <CardProduct name={product.name} image={""} description={product.description} price={product.price} />
        ))
      }
    </Container>
  )
}

export default ListProducts;






import { useContext } from 'react'

import MainHeader from '../../components/Header'

import { CartContext } from '../../helpers/CartContext'
import { formatCurrency } from '../../helpers/formatCurrency'

import { BiArrowBack } from 'react-icons/bi'
import { TiDeleteOutline } from 'react-icons/ti'
import { useHistory } from 'react-router-dom'

import {
   Container,
   Cart,
   Product,
   Cover,
   Description,
   Remove,
   Title,
   Price,
   Score,
   Payment,
   Shipping,
   Subtotal,
   Total
} from './styles'

const Checkout = () => {
   const history = useHistory()

   const { cart, setCart } = useContext(CartContext)

   const shipping_value = () => {
      const shipping = cart.reduce((total, product) => {
         if (product.price < 250) total += 10
         return total
      }, 0)

      return shipping
   }

   const subTotalValue = () => {
      const total = cart.reduce((total, product) => {
         return (total += product.price)
      }, 0)

      return total
   }

   const total = () => formatCurrency(shipping_value() + subTotalValue())

   const remove = id => setCart(cart.filter(prod => prod.id !== id))

   return (
      <>
         <MainHeader title={'Cart'}>
            <BiArrowBack size={20} onClick={e => history.goBack()} />
         </MainHeader>

         <Container>
            <Cart>
               {cart.map(product => (
                  <Product key={product.id}>
                     <Cover src={product.image} alt={product.name} />
                     <Description>
                        <Title>{product.name}</Title>
                        <Price>{formatCurrency(product.price)}</Price>
                        <Score>Score: {product.score}</Score>
                        <Remove onClick={_ => remove(product.id)}>
                           <TiDeleteOutline />
                        </Remove>
                     </Description>
                  </Product>
               ))}
            </Cart>

            <Payment>
               <Shipping>
                  <p>Shipping:</p>
                  <p>{formatCurrency(shipping_value())}</p>
               </Shipping>
               <hr />
               <Subtotal>
                  <p>Subtotal:</p>
                  <p>{formatCurrency(subTotalValue())}</p>
               </Subtotal>
               <hr />
               <Total>
                  <p>Total: </p>
                  <p>{total()}</p>
               </Total>
            </Payment>
         </Container>
      </>
   )
}

export default Checkout

import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { TiSortAlphabetically } from 'react-icons/ti'
import { AiOutlineToTop } from 'react-icons/ai'
import { ImPriceTags } from 'react-icons/im'
import { FaShoppingCart, FaCartPlus } from 'react-icons/fa'
import { CgRemove } from 'react-icons/cg'

import MainHeader from '../../components/Header'

import { CartContext } from '../../helpers/CartContext'
import { formatCurrency } from '../../helpers/formatCurrency'

import data from '../../data/products.json'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
   Container,
   Sorting,
   GridImages,
   ImageFrame,
   Image,
   Title,
   Price,
   Icons
} from './styles'

const Home = () => {
   const { cart, setCart } = useContext(CartContext)

   const [orderASC, setOrderASC] = useState(true)
   const [list, setList] = useState(data)

   useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart])

   const add = product => {
      setCart([product, ...cart])
      notify('add')
   }

   const remove = id => {
      setCart(cart.filter(prod => prod.id !== id))
      notify('remove')
   }

   //Sorting
   const sortAlphabetical = () => {
      if (orderASC) {
         setOrderASC(prev => !prev)
         setList(
            list.sort((a, b) =>
               a.name < b.name ? -1 : a.name > b.name ? 1 : 0
            )
         )
      } else {
         setOrderASC(prev => !prev)
         setList(
            list.sort((a, b) =>
               a.name > b.name ? -1 : a.name > b.name ? 1 : 0
            )
         )
      }
   }

   const sortByPopularity = () => {
      if (orderASC) {
         setOrderASC(prev => !prev)
         setList(
            list.sort((a, b) =>
               a.score < b.score ? -1 : a.score > b.score ? 1 : 0
            )
         )
      } else {
         setOrderASC(prev => !prev)
         setList(
            list.sort((a, b) =>
               a.score > b.score ? -1 : a.score > b.score ? 1 : 0
            )
         )
      }
   }

   const sortByPrice = () => {
      if (orderASC) {
         setOrderASC(prev => !prev)
         setList(
            list.sort((a, b) =>
               a.price < b.price ? -1 : a.price > b.price ? 1 : 0
            )
         )
      } else {
         setOrderASC(prev => !prev)
         setList(
            list.sort((a, b) =>
               a.price > b.price ? -1 : a.price > b.price ? 1 : 0
            )
         )
      }
   }

   //Notifications
   const notify = type => {
      type === 'add' &&
         toast.info('Added to cart!', {
            position: 'top-left',
            closeButton: false,
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined
         })

      type === 'remove' &&
         toast.error('Removed from cart!', {
            position: 'top-left',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined
         })
   }

   return (
      <>
         <ToastContainer />
         <MainHeader title={'Home'}>
            <Link to='/checkout'>
               <FaShoppingCart size={20} />
            </Link>
         </MainHeader>

         <Container>
            <Sorting>
               <button value='price' onClick={sortByPrice}>
                  <ImPriceTags size={30} />
                  Price
               </button>
               <button value='popularity' onClick={sortByPopularity}>
                  <AiOutlineToTop size={30} />
                  Popularity
               </button>
               <button value='alphabetical_order' onClick={sortAlphabetical}>
                  <TiSortAlphabetically size={30} />
                  Alphabetical Order
               </button>
            </Sorting>

            <GridImages>
               {list.map(product => (
                  <ImageFrame key={product.id}>
                     <Image src={product.image} alt={product.name} />
                     <Title>{product.name}</Title>
                     <Price>{formatCurrency(product.price)}</Price>
                     <p>{product.score}</p>

                     <Icons>
                        <FaCartPlus
                           color={'#fff'}
                           size={21}
                           onClick={_ => add(product)}
                        />
                        <CgRemove
                           color={'#fff'}
                           size={21}
                           onClick={_ => remove(product.id)}
                        />
                     </Icons>
                  </ImageFrame>
               ))}
            </GridImages>
         </Container>
      </>
   )
}

export default Home

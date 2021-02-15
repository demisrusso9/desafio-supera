import styled from 'styled-components'

export const Container = styled.div`
   padding: 1rem 1rem;
   display: flex;
   justify-content: center;
`

export const Cart = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
`
export const Product = styled.div`
   width: 100%;
   height: 80px;
   display: flex;
   background-color: #0006;
   margin: 0.4rem;
`
export const Cover = styled.img`
   width: 60px;
   height: 80px;
   object-fit: cover;
`

export const Description = styled.div`
   position: relative;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const Remove = styled.div`
   position: absolute;
   top: 0.4rem;
   right: 0.8rem;
   color: #eaeaeb;
   cursor: pointer;
`

export const Title = styled.h3`
   position: absolute;
   top: 0.4rem;
   left: 0.8rem;
   color: #eaeaeb;
`

export const Price = styled.p`
   position: absolute;
   bottom: 0.4rem;
   right: 0.8rem;
   font-weight: bold;
   color: #f5f5f5;
`

export const Score = styled.small`
   position: absolute;
   top: 2rem;
   left: 0.8rem;
   color: #a1a1a5;
`

export const Payment = styled.div`
   width: 600px;
   height: 190px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;

   background-color: #1b1725;
   color: #fff;

   margin: 0.4rem 1rem;

   > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 1.2rem;
   }

   > hr {
      width: 100%;
      border: 0;
      border-top: 1px solid white;
   }
`

export const Shipping = styled.div`
   font-size: 16px;
`
export const Subtotal = styled.div`
   font-size: 20px;
`
export const Total = styled.div`
   font-size: 24px;
`

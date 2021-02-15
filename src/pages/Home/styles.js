import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

export const Sorting = styled.div`
   padding: 1rem 0;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

   > button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0;
      height: 40px;
      margin-right: 0.8rem;
      padding: 0 3rem;
      cursor: pointer;

      > svg {
         margin-right: 0.8rem;
      }
   }
`

export const GridImages = styled.div`
   width: 90%;
   display: grid;
   gap: 1rem;
   align-content: center;
   align-items: center;
   grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`

export const ImageFrame = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   > button {
      cursor: pointer;
   }
`
export const Image = styled.img`
   height: 200px;
   width: 100%;
   object-fit: cover;
`
export const Title = styled.h3`
   margin-top: 0.6rem;
   text-align: center;
   color: #e4e4e4;
`
export const Price = styled.p`
   text-align: center;
   color: #ccc;
`

export const Icons = styled.div`
   height: 30px;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   > svg {
      margin-left: 1rem;
      cursor: pointer;
   }
`

import styled from "styled-components"

export  const MainLayout = styled.div`
       padding: 2rem;
       height: 100%;
       display: flex;
       /* flex-direction: column; */
       width: 100%;
       gap:  2rem;
       @media (max-width: 767px){
              display: flex;
              flex-direction: column;
              width: 400px;

       }

       
`

export const InnerLayout = styled.div`
       padding: 2rem 1.5rem;
       /* margin: 2; */
       width: 100%;
       @media (max-width: 767px){
              
              height: 100%;
       }

       
`
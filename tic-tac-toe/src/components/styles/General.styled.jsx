import styled from "styled-components";

 export const Title = styled.h1`
    color : ${(props) => props.theme.colors.text};
  font-size: 3rem;
  background-color: transparent;
  font-family: 'Pacifico', cursive;
 
`
export const SubTitle = styled.h4`
    color : ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 200;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
 
`

export const Btn = styled.button`
    background-color:transparent;
`
export const Container = styled.div`
    height: 80vh;
    width: 100vw;
  background-color:  ${(props) => props.theme.colors.primary };
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding: 0 2rem;
text-align: center;
`
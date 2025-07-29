import styled from "styled-components";

 export const Title = styled.h1`
    color : ${(props) => props.theme.colors.text};
  font-size: 4rem;
  background-color: transparent;
  font-family: 'Pacifico', cursive;

  ${(props) => props.theme.media.mobile} {
    font-size: 5rem;
  }
 
`
export const SubTitle = styled.h4`
    color : ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 200;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
 
`

export const Text = styled.p`
    color : ${(props) => props.theme.colors.text};
  font-size: 1.2rem;
  font-weight: 200;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  padding: 10px;
 
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
flex-direction: ${(props) => props.columnBased ? 'column' : 'row'};
padding: 0 2rem;
text-align: center;


${(props) => props.theme.media.mobile} {
  flex-direction: column;
  justify-content: center;
  align-items : center;
}
`
import styled from "styled-components";

export const CellStyle = styled.button`
    background-color:${(props)=>props.theme.colors.secondary};
    border: none;
    border-radius:2.5rem;
    box-shadow: 5px 10px ${(props)=> props.theme.colors.tertiary};
    width: 10rem;
    height: 10rem;
    stroke: ${(props) => props.theme.colors.tertiary};
   fill: ${(props) => props.theme.colors.tertiary};
    font-size: 3rem;
    cursor:pointer;
    padding: 2.5rem;
    

    .outlineIcon{
      

            stroke-width: 0;
       
    }

    &:hover{
        .outlineIcon{
       
            stroke: ${(props) => props.theme.colors.primary};
            stroke-width: 2;
      
    }
    }
`
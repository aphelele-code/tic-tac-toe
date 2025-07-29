import styled from 'styled-components'

export const PlayerWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 6rem;

    ${(props) => props.theme.media.mobile} {
        display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 4rem;
 
}

`

export const AvatarWrapper = styled.div`
    div{
     filter: ${(props) => props.isPlayerActive ? '' : 'grayscale(90%)'} ;
       display: flex ;
       width: 8rem;
       height: 8rem;
    }
`
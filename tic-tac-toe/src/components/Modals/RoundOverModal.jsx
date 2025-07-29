import React, {useContext} from 'react'
import { Title, SubTitle } from '../styles/General.styled'
import {ModalHeader, ModalBody, ModalFooter} from '../Modal/Modal.styled'
import Button from '../Button/Button'
import { GameContext } from '../context/GameContext'
import {ModalContext} from '../context/ModalContext'
import { SfxContext } from '../context/SfxContext'
const RoundOverModal = ({ winner }) => {
  const { resetBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const { playHoverSfx } = useContext(SfxContext);

  if (!winner || !game) return null; // safety check

  const continueRound = () => {
    handleModal(null);
    resetBoard();
  };

  return (
    <>
      <ModalHeader>
        <Title primary>
          {winner === 'DRAW'
            ? 'Round Drawn'
            : `${game[winner]?.name || 'Player'} Wins Round`}
        </Title>
      </ModalHeader>
      <ModalBody>
        <SubTitle primary>Choices will be switched now.</SubTitle>
        <SubTitle primary>{game.player1.name} : {game.player1.score}</SubTitle>
        <SubTitle primary>{game.player2.name} : {game.player2.score}</SubTitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={continueRound}
          onMouseOver={playHoverSfx}
        >
          Continue
        </Button>
        <Button
  color="#8437f9"
  onClick={() => {
    handleModal(null);
    resetGame(); 
  }}
  onMouseOver={playHoverSfx}
>
  Restart
</Button>

      </ModalFooter>
    </>
  );
};

export default RoundOverModal

import { Fab } from '@mui/material';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { ContainerButtonUp } from '../styled/ButtonStyle';
const ButtonTop = () => {
  const [upButton, setUpButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setUpButton(true);
      } else {
        setUpButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      {upButton ? (
        <ContainerButtonUp>
          <Fab onClick={() => scrollUp()} color="info">
            <BsFillArrowUpCircleFill size={40}></BsFillArrowUpCircleFill>
          </Fab>
        </ContainerButtonUp>
      ) : (
        <></>
      )}
    </>
  );
};
export default ButtonTop;

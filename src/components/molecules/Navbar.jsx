import {
  LeftContainer,
  NavbarContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  RightContainer,
  NavbarContainerIconText,
} from '../styled/grid/NavbarGridStyled';
import Icon from '../atoms/Icon';
const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">
              <NavbarContainerIconText>
                <Icon></Icon>
                <p>Grupo 3</p>
              </NavbarContainerIconText>
            </NavbarLink>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <NavbarLink smooth to="/#about">
            <p>Introducción</p>
          </NavbarLink>
          <NavbarLink smooth to="/#algorithm">
            <p>Algoritmos</p>
          </NavbarLink>
          <NavbarLink to="/app">
            <p>Aplicación</p>
          </NavbarLink>
        </RightContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
};
export default Navbar;

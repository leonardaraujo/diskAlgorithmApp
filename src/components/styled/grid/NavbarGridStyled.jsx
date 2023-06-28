import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
export const NavbarContainer = styled.nav`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  height: 50px;
  background-color: #051923;
  width: 100%;
  align-items: center;
  position: sticky;
  margin-bottom:20px;
`;
export const LeftContainer = styled.div`
  flex: 40%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;
export const RightContainer = styled.div`
  flex: 60%;
  display: flex;
  align-items: flex-end;
  padding-right: 50px;
  justify-content: end;
  gap: 30px;
`;
export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
export const NavbarLinkContainer = styled.div`
  display: flex;
`;
export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;

  &:hover {
    color: #006494;
  }
`;
export const NavbarContainerIconText = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`;

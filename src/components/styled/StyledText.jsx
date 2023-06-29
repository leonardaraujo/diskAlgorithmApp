import styled from 'styled-components';
export const StyledText = styled.p`
  font-size: ${({ size }) => {
    if (size == 's') {
      return '10px;';
    } else if (size == 'm') {
      return '20px;';
    } else if (size == 'l') {
      return '30px;';
    } else if (size == 'xl') {
      return '45px;';
    } else if (size == 'title') {
      return '100px;';
    } else if (size == 'titlexl') {
      return '125px;';
    } else {
      return '20px;';
    }
  }};
  font-weight: ${({ bold }) => (bold ? 'bold' : "'normal'")};
  text-align: ${({ align }) => {
    if (align == 'start') {
      return 'start;';
    } else if (align == 'center') {
      return 'center;';
    } else if (align == 'end') {
      return 'end;';
    } else {
      return 'start;';
    }
  }};
  color: ${({ color }) => {
    if (color == 'white') {
      return 'white';
    } else if (color == 'blue') {
      return '#051923';
    } else {
      return 'black';
    }
  }};
`;

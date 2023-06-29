import styled from 'styled-components';
export const FlexBoxBodyCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-items: center;
  align-items: center;
`;
export const ContainerCard = styled.div`
  width: 100%;
  height: 400px;
  background-color: #006494;
  display: flex;
  flex-direction: row;
  color: white;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;
export const ContainerCardText = styled.div`
  display: flex;
  flex: 70%;
  margin: 30px;
  width: 100%;
`;
export const InnerContainerCardText = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const InnerContainerCardTextTitle = styled.div`
  flex: 20%;
`;

export const InnerContainerCardTextBody = styled.div`
  flex: 80%;
`;

export const ContainerCardImage = styled.div`
  width: 100%;
  display: flex;
  flex: 30%;
  justify-items: center;
  align-items: center;
  justify-content: center;
  padding:10px;
`;
export const ContainerCardTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-bottom: 50px;
  color: white;
  gap: 20px;
`;

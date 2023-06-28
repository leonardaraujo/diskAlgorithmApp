import {
  ContainerCard,
  ContainerCardText,
  ContainerCardImage,
  InnerContainerCardText,
  InnerContainerCardTextBody,
  InnerContainerCardTextTitle,
} from '../styled/grid/CardStyled';
import { StyledText } from '../styled/StyledText';
import Image from '../atoms/Image';
const Card = ({ title, textBody, image }) => {
  return (
    <ContainerCard>
      <ContainerCardText>
        <InnerContainerCardText>
          <InnerContainerCardTextTitle>
            <StyledText size="l" bold={true} align="center" color="white">
              {title}
            </StyledText>
          </InnerContainerCardTextTitle>
          <InnerContainerCardTextBody>
            <StyledText size="m" color="white">
              {textBody}
            </StyledText>
          </InnerContainerCardTextBody>
        </InnerContainerCardText>
      </ContainerCardText>
      <ContainerCardImage>
        <Image image={image}></Image>
      </ContainerCardImage>
    </ContainerCard>
  );
};
export default Card;

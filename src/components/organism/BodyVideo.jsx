import MyVideo from '../atoms/MyVideo';
import { StyledText } from '../styled/StyledText';
import { ContainerTextVideo, ContainerVideo } from '../styled/VideoStyled';
const BodyVideo = () => {
  return (
    <ContainerVideo>
      <MyVideo> </MyVideo>
      <ContainerTextVideo>
        <StyledText size={'titlexl'} color={'white'} bold={false}>
          Planificación de disco
        </StyledText>
      </ContainerTextVideo>
    </ContainerVideo>
  );
};
export default BodyVideo;

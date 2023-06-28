import hddVideo from '../../assets/video/hdd2.mp4';
import { StyledVideo } from '../styled/VideoStyled';
const MyVideo = () => {
  return (
    <StyledVideo src={hddVideo} autoPlay loop muted>
      MyVideo
    </StyledVideo>
  );
};
export default MyVideo;

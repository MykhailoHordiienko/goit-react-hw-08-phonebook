import styled from 'styled-components';
import wallPagePhoto from '../../Photo/Wall.png';
import homePagePhoto from '../../Photo/homePage.png';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 95vh;
  padding: 40px;
  padding-top: 89px;
  background-image: url(${wallPagePhoto}), url(${homePagePhoto});
  background-size: 50%, 20%;
  background-position: right 96%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  animation: 0.8s show ease;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

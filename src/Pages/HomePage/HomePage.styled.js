import styled from 'styled-components';
import homePagePhoto from '../../Photo/homePage.png';

export const HomeSection = styled.section`
  display: flex;
  min-height: calc(100vh - 130px);
  padding: 40px;
  background-image: url(${homePagePhoto});
  background-size: 45%;
  background-position: 85% 93%;
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

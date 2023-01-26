import styled from 'styled-components';
import homePagePhoto from '../../Photo/homePage.png';

export const HomeSection = styled.section`
  display: flex;
  height: 95vh;
  padding: 40px;
  padding-top: 89px;
  background-image: url(${homePagePhoto});
  background-size: 50%;
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

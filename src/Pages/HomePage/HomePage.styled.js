import styled from 'styled-components';
import homePagePhoto from '../../Photo/homePage.png';

export const HomeSection = styled.section`
  display: flex;
  height: 100vh;
  padding: 40px;
  padding-top: 89px;
  background-image: url(${homePagePhoto});
  background-size: 50%;
  background-position: right bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

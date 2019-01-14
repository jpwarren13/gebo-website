import styled from 'styled-components';
import image from '../../../images/Oil.png';

const Splash = styled.div`
  grid-column-start: 1;
  grid-column-end: 8;
  grid-row-start: 2;
  grid-row-end: 8;
  background-position: center;
  background-size: cover;
  background-image: url('${image}');
  background-attachment: fixed;
  background-repeat: no-repeat;
`;

export default Splash;

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Title = styled(motion.h1)`
  width: 100%;
  font-size: 2.5em; /* 40px */
  font-family: 'Montserrat-Black';
  font-weight: 900;
  color: #FFF;
  text-transform: uppercase;
  letter-spacing: -2.25;
  text-align: center;
  margin: 0;
  @media (min-width: 1024px) {
    font-size: 7.5em; /* 120px */
  }
`;
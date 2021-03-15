import { useEffect, useState, memo } from 'react';
import Container from '../components/container/Container';
import { Logo } from '../components/logo/index';
import { Nav } from '../components/nav';

interface UseWindowSizeState {
  width: number | undefined;
  height: number | undefined;
}

const useWindowSize = (): UseWindowSizeState => {
  const [windowSize, setWindowSize] = useState<UseWindowSizeState>({ width: undefined, height: undefined });

  const handleResize = (): void => setWindowSize({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default function Home() {
  const windowSize = useWindowSize();

  const style = { height: windowSize.height };

  if(!windowSize.height) return null;

  return (
    <Container style={style}>
      <Nav />
      <Logo />
    </Container>
  );
}

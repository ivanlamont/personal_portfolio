import { useSpring, animated as a } from '@react-spring/web';

export const SpringIn = ({children}: {children: React.ReactNode}) => {
    const animatedProps = useSpring({
      to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
      from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
      delay: 1000,
    });
    return <a.div className="spring-in" style={{...animatedProps}}>{children}</a.div>
  }
  
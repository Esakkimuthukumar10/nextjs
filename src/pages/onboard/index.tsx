import OnboardLayout from "@padra/components/onboard-layout";
import styles from './onboard.module.css';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode
}

const Onboard: React.FC<LayoutProps> = ({ children }) => {
    return (
      <OnboardLayout>
        {children}
      </OnboardLayout>
    );
  };
  
  export default Onboard;
  
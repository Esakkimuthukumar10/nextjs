
import { StepperContent } from '@padra/utils/stepper-content';
import styles from './side-nav.module.css';
import { usePathname } from 'next/navigation';
import Onboard from '@padra/pages/onboard';
import { useState } from 'react';

export default function SideNav() {
    const path = usePathname();

    const [currentPath, setCurrentPath] = useState(path.split('/').pop())

    const steps =  StepperContent.map((stepper, index) => 
    <a href={`#${stepper.name.toLowerCase()}`} key={index} className="no-underline text-[#000]">
    <li key={index} 
    onClick={() => setCurrentPath(stepper.name.toLowerCase())}
    className={`${styles.list} ${currentPath == stepper.name.toLowerCase() ? styles.active_list : ''}`}>
        {stepper.name}
    </li>
    </a>
    )

   return(  
    <div className={styles.side_nav}>
        <div className={styles.onboard_category}>
        <ul className={styles.steps}>{steps}</ul>
        </div>
        <div className={styles.onboard_steps}>
        </div>
    </div>
   )
}
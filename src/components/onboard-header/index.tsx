import { useEffect, useState } from 'react';
import styles from './onboard-header.module.css';
import { ProgressBar } from 'primereact/progressbar';
        

export default function OnboardHeader() {

   const [currentStep, setCurrentStep] = useState(0);

   useEffect(() => {
     setCurrentStep(1 * 9.099);
     console.log(currentStep)
   },[])
    
   return(
    <div className={styles.container}>
       <p className={styles.step}>Step 1 of 11</p>
       <ProgressBar value={currentStep} showValue={false} className={styles.progress_bar}></ProgressBar>
       <p className={styles.current_step_name}>Medical History</p>
    </div>
   )
}
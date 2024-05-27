import OnboardHeader from "../onboard-header";
import SideNav from "../side-nav";
import styles from './onboard-layout.module.css'


export default function OnboardLayout({children}: Readonly<{children: React.ReactNode}>) {
    return(
        <main className={styles.container}>
         <div>
            <SideNav />
         </div>
        <div className={styles.step_container}>
            <OnboardHeader/>
            {children}   
          </div>
        </main>
    )
}
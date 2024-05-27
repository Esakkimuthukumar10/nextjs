
import styles from './header.module.css'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { Button } from 'primereact/button'

export default function AppHeader() {
    const path = usePathname()
   return(
    <div className={styles.header}>
    <Image
      src="/app_logo.svg"
      width={103}
      height={46}
      alt="Padra Logo"
    />
    { path != '/login' && <Button label="Log out" className={styles.logout} /> }
    </div>
   )
}
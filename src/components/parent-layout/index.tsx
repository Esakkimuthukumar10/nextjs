import AppHeader from '@component/header';

export default function ParentHeader({children}: Readonly<{children: React.ReactNode}>) {
    return (
      <main>
      <AppHeader/>
      <div>
          {children}   
        </div>
      </main>
    )
}
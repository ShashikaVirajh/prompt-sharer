import Navigation from '@components/navigation';
import '@styles/globals.css';
import { FC, ReactNode } from 'react';

export const metadata = {
    title: "Prompt Sharer",
    description: 'Discover & Share AI Prompts'
}

const RootLayout: FC<Props> = ({children}): JSX.Element => {
    return (
     <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>

            <main className="app">
                <Navigation />
                {children}
            </main>
        </body>
     </html>
    )
  }

  type Props = {
    children: ReactNode
  }
  
  export default RootLayout
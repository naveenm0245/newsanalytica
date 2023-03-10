import '../styles/globals.css'
import { AnalyticsWrapper } from './components/Analytics'
import Header from './Header'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='bg-gray-50 md:bg-white-800 dark:bg-zinc-900 transition-all duration-700'>
        <Header/>
        <div className='max-w-6xl mx-auto'
        >{children}</div>
        <AnalyticsWrapper/>
        </body>
    </html>
  )
}

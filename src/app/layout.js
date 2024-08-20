export const metadata = {
  title: 'Routing',
  description: 'Testing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

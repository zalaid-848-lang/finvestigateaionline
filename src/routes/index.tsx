import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Follow the money. Find what matters.</h1>
      <p>An AI research workspace for financial investigations.</p>
    </main>
  )
}

export default HomePage

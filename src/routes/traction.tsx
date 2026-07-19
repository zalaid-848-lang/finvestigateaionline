import { createFileRoute } from '@tanstack/react-router'
import Traction from '../pages/Traction'

export const Route = createFileRoute('/traction')({
  component: Traction,
})

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">Page Not Found</h2>
        <p className="text-slate-600 mb-8">Sorry, we couldn't find the page you're looking for.</p>
        <Link href="/">
          <Button className="bg-primary-navy hover:bg-slate-800 text-white">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  )
} 
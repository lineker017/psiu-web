import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/components/sidebar'

export function AuthLayout() {
  return (
    <div className="flex gap-8 bg-zinc-800">
      <Sidebar />

      <Outlet />
    </div>
  )
}

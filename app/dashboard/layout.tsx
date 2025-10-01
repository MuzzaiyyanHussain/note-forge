import { AppSidebar } from '@/components/app-sidebar'
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

function Layout({children}:{children:React.ReactNode}) {
  return (
    <div>
  <SidebarProvider>
        <AppSidebar/>
      <main className="flex-1">{children}</main>
    </SidebarProvider>
    </div>
  )
}

export default Layout
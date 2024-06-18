import React from 'react'
import { Logo } from './logo'

export const Sidebar = () => {
  return (
      <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
          <div>
              <Logo />
          </div>
      </div>
  )
}

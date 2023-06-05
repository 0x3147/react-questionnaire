import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import { Skeleton } from 'antd'

function App() {
  return (
    <Suspense fallback={<Skeleton active />}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  )
}

export default App

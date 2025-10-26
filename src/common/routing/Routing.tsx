import { Route, Routes } from 'react-router'

import { ProfilePage } from '@/features/user/ui/ProfilePage'

import { MainPage } from '@/app/ui/main-page/MainPage'

import { NotFoundPage } from '@/common/components'

export const Paths = {
  Main: '/',
  Profile: '/profile',
  NotFound: '*'
} as const

export const Routing = () => {
  return (
    <Routes>
      <Route path={Paths.Main} element={<MainPage />} />
      <Route
        path={`${Paths.Profile}/:id`}
        element={<ProfilePage />}
      />
      <Route path={Paths.NotFound} element={<NotFoundPage />} />
    </Routes>
  )
}

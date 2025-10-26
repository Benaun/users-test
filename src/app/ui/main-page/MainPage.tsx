import { ActiveUsersList } from '@/features/user/ui/active-users-list/ActiveUsersList'
import { ArchiveUsersList } from '@/features/user/ui/archive-users-list/ArchiveUsersList'

export const MainPage = () => {
  return (
    <main>
      <ActiveUsersList />
      <ArchiveUsersList />
    </main>
  )
}

import { useState } from 'react'
import { useParams } from 'react-router'

import { useFetchUserById } from '../../api'
import type { UpdateFormData } from '../../model'
import { ProfileForm } from '../profile-form/ProfileForm'
import { ProfileNav } from '../profile-nav/ProfileNav'

import styles from './ProfilePage.module.css'
import { Headline, Modal } from '@/common/components'
import { ButtonBack } from '@/common/components/button-back/ButtonBack'

export const ProfilePage = () => {
  const { id } = useParams<{ id: string }>()
  const userId = id ? parseInt(id, 10) : 0
  const [showModal, setShowModal] = useState(false)

  const { data: user, isLoading } = useFetchUserById(userId)

  const handleUpdateSuccess = (data: UpdateFormData) => {
    console.log('Form data:', data)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  if (isLoading) return <div>...loading</div>
  if (!user) return <div>User not found</div>

  const initialValues: UpdateFormData | undefined = user
    ? {
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.address?.city || '',
      phone: user.phone,
      company: user.company?.name || ''
    }
    : undefined

  return (
    <>
      <main className={styles.main}>
        <ButtonBack />
        <div className={styles.main__nav_wrapper}>
          <ProfileNav />
        </div>

        <div className={styles.main__form_wrapper}>
          <div className={styles.main__profile}>
            <Headline text={'Данные профиля'} />
            <ProfileForm
              initialValues={initialValues}
              onUpdateSuccess={handleUpdateSuccess}
            />
          </div>
        </div>
      </main>

      {showModal && <Modal onClose={handleCloseModal} />}
    </>
  )
}

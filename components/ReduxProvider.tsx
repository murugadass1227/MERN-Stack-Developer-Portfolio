'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setTheme } from '@/store/themeSlice'

function ThemeHandler() {
  const isDark = useAppSelector((state) => state.theme.isDark)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    dispatch(setTheme(prefersDark))
  }, [dispatch])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return null
}

export default function ReduxProvider({
  children,
}: {
  children: ReactNode
}) {
  return (
    <Provider store={store}>
      <ThemeHandler />
      {children}
    </Provider>
  )
}


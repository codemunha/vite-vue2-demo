import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Bird',
    isAdmin: true,
  }),
  actions: {
    /**
     * Attempt to login a user
     */
    async login(user, password) {
      const userData = await apiLogin(user, password)

      this.$patch({
        name: user,
        ...userData,
      })
    },
    logout() {
      this.$patch({
        name: '',
        isAdmin: false,
      })

      // we could do other stuff like redirecting the user
    },
  },
})

/**
 * Simulate a login
 */
function apiLogin(a, p) {
  if (a === 'ed' && p === 'ed') return Promise.resolve({ isAdmin: true })
  if (p === 'ed') return Promise.resolve({ isAdmin: false })
  return Promise.reject(new Error('invalid credentials'))
}
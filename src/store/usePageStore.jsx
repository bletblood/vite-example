import { create } from 'zustand'
import ky from 'ky'

const usePageStore = create((set) => ({
  loading: true,
  data: [],
  error: [],
  setData: async limit => {
    try {
      const result = await ky('/users', {
        method: 'get',
        limit: limit,
        timeout: false,
        prefixUrl: import.meta.env.VITE_URL
      }).json()
      set({data: result})
    } catch (err) {
      set({error: err})
    } finally {
      set({loading: false})
    }
  },
  removeAllData: () => set({ data: [] }),
}))

export default usePageStore
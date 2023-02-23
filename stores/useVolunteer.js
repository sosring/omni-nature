import axios from 'axios'

export const useVolunteerStore = defineStore('useVolunteer', {
  actions: {

    async addNewVolunteer (credentials) {
      try {
        console.log(credentials)
        await axios.post('/api/volunteers/create', credentials) 
      }
      catch (err) {
        return err.message
      }
    }
  }
})

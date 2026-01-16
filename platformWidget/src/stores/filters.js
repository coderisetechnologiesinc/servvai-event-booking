import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useFiltersStore = defineStore('filters', () => {
  const locations = ref([])
  const isLoading = ref(false)
  const filtersListFetched = ref(false)

  async function fetchLocations() {
    const root = document.querySelector('#platformwidget-wrapper')
    if (!root || !window.servvAjax) return

    isLoading.value = true

    try {
      const params = new URLSearchParams()
      params.append('security', servvAjax.nonce)
      params.append('action', 'servv_get_types_list')

      const response = await axios.post(servvAjax.ajax_url, params)
      if (response.status !== 200 || !response.data) return

      /**
       * Очікувана структура:
       * response.data.locations = [{ id, name }]
       */
      locations.value =
        response.data.locations?.map((loc) => ({
          id: loc.id,
          name: loc.name,
        })) || []

      filtersListFetched.value = true
    } catch (e) {
      console.error('Failed to fetch locations', e)
    } finally {
      isLoading.value = false
    }
  }

  return {
    locations,
    isLoading,
    filtersListFetched,
    fetchLocations,
  }
})

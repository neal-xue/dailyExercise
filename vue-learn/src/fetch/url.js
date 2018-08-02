import {postFetch,getFetch} from './api'

export default {
  orderClick(params){
      return getFetch('/api/pub/announcement/getlist',params)
  }
}
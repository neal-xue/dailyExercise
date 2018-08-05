import {postFetch,getFetch} from './api'

export default {
  //老师端-作业列表
  getCourseList(params){
    return getFetch('https://www.easy-mock.com/mock/5b66aad81fc80e53a3ad6232/example_copy/getCourseList',params);
  }
}


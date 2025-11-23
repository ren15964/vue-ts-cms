import { getEntireDepartments, getEntireRules } from '@/service/main/main'
import { defineStore } from 'pinia'
interface ImainState {
  entireRoles: any[]
  entireDepartments: any[]
}

const useMainStore = defineStore('main', {
  state: (): ImainState => ({
    entireRoles: [],
    entireDepartments: []
  }),
  actions: {
    async fetchEntireDataAction() {
      const roleseResult = await getEntireRules()
      const departmentsResult = await getEntireDepartments()
      // 保存数据
      this.entireRoles = roleseResult.data.list
      this.entireDepartments = departmentsResult.data.list
    }
  }
})

export default useMainStore

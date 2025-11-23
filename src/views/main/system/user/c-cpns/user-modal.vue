<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="500" center>
      <div class="form">
        <el-form :model="formData" label-width="100px">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="formData.name" placeholder="输入用户名" />
          </el-form-item>
          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="formData.realname" placeholder="输入真实姓名" />
          </el-form-item>
          <el-form-item v-if="isNewRef" label="密码" prop="password">
            <el-input
              v-model="formData.password"
              placeholder="输入密码"
              show-password
            />
          </el-form-item>
          <el-form-item label="电话号码" prop="cellphone">
            <el-input v-model="formData.cellphone" placeholder="输入电话号码" />
          </el-form-item>
          <el-form-item label="选择角色" prop="roleId">
            <el-select v-model="formData.roleId" placeholder="选择角色">
              <el-option
                v-for="item in entireRoles"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="选择部门" prop="departmentId">
            <el-select v-model="formData.departmentId" placeholder="选择部门">
              <el-option
                v-for="item in entireDepartments"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'
const formData = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})
const isNewRef = ref(true)
const systemStore = useSystemStore()
const editData = ref()
// 获取角色数据
const mainStore = useMainStore()
const { entireRoles, entireDepartments } = storeToRefs(mainStore)
//

const dialogVisible = ref(false)

function setModalVisible(isNew: boolean = true, itemData?: any) {
  dialogVisible.value = true
  isNewRef.value = isNew
  if (!isNew && itemData) {
    for (const key in formData) {
      formData[key] = itemData[key]
      editData.value = itemData
    }
  } else {
    for (const key in formData) {
      formData[key] = ''
    }
    editData.value = null
  }
}
// 确定逻辑
function handleConfirmClick() {
  dialogVisible.value = false
  // 编辑用户

  if (!isNewRef.value && editData.value) {
    systemStore.editUserDataAction(editData.value.id, formData)
  }
  // 新建用户
  else {
    systemStore.newUserDataAction(formData)
  }
}
defineExpose({ setModalVisible })
</script>

<style scoped>
.form {
  padding: 0 20px;
}
.el-input,
.el-select {
  padding-right: 50px;
}
</style>

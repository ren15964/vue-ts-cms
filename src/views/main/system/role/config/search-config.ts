const serachconfig = {
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '角色名称',
      placeholder: '请输入查询的角色名称',
      initialValue: 'aaa'
    },
    {
      type: 'input',
      prop: 'leader',
      label: '权限介绍',
      placeholder: '请输入查询的权限'
    },
    {
      type: 'date-picker',
      prop: 'creatAt',
      label: '创建时间'
    }
  ]
}
export default serachconfig

// 所有状态
const state = {
  treeMenu: {},
  selectedBoxId: {}, // 获取文件夹id
  selectedBoxName: '', // 文件夹名称
  refurbishBool: 1, // 是否刷新文件夹
  checkedBoxid: 0, // 选中文件id
  typeMoving: '', // 文件移动类型|boxId
  quantityChange: {}, // 数量改变,
  refurbishListBool: 1, // 是否刷新列表
  refurbishlabelList: 0, // 是否刷新标签列表
  treeCustmerBool: 0, // 客户树是否刷新
  subordinateCtid: 0, // 下属ctid
  mailTemplateListG: []
}

export default state

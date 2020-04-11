// 所有mutations
// 在mutations中只能是同步的操作，打印个日志什么的
// 在actions文件中使用commit方法触发调用
import * as types from './mutation-types'

const mutations = {
  [types.SET_TREEMENU] (state, data) {
    state.treeMenu = data
  },
  [types.SET_SELECTEDBOXID] (state, data) {
    state.selectedBoxId = data
  },
  [types.SET_SELECTEDBOXNAME] (state, data) {
    state.selectedBoxName = data
  },
  [types.SET_REFURBISHBOOL] (state, data) {
    state.refurbishBool = data
  },
  [types.SET_CHECKEDBOXID] (state, data) {
    state.checkedBoxid = data
  },
  [types.SET_TYPEMOVING] (state, data) {
    state.typeMoving = data
  },
  [types.SET_QUANTITYCHANGE] (state, data) {
    state.quantityChange = data
  },
  [types.SET_REFURBISHLISTBOOL] (state, data) {
    state.refurbishListBool = data
  },
  [types.SET_REFURBISHLABELLIST] (state, data) {
    state.refurbishlabelList = data
  },
  [types.SET_TREECUSTMERBOOL] (state, data) {
    state.treeCustmerBool = data
  },
  [types.SET_SUBORDINATECTID] (state, data) {
    state.subordinateCtid = data
  },
  [types.SET_MAILTEMPLATELISTG] (state, data) {
    state.mailTemplateListG = data
  }
}
export default mutations

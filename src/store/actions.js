// 异步操作，异步修改
import * as types from './mutation-types'

// 获取个人信息
export const setPersonalInfo = function ({ commit, state }, option = {}) {
  const _V = this._vm
  _V.$http.get(_V.Global.baseURL + _V.Global.api.UniversalInterface.accountQuery, { params: {} }).then(function (res) {
    if (res.body.code.toString() === _V.Global.RES_OK) {
      commit(types.SET_PERSONALINFO, res.body.data)
    } else {
      console.warn('setPersonalInfo error!')
    }
  })
}

// 设置企业基础信息
export const setCompanyBasicInfo = function ({ commit, state }, option = {}) {
  const _V = this._vm
  _V.$http.get(_V.Global.baseURL + _V.Global.api.v2.company_query, { params: {} }).then(function (res) {
    if (res.body.code.toString() === _V.Global.RES_OK) {
      commit(types.SET_COMPANYBASICINFO, res.body.data)
    } else {
      console.warn('setPersonalInfo error!')
    }
  })
}

// 设置企业配置信息
export const setCompanyConfigInfo = function ({ commit, state }, option = {}) {
  const _V = this._vm
  _V.$http.get(_V.Global.baseURL + _V.Global.api.UniversalInterface.companysettingGet, { params: {} }).then(function (res) {
    if (res.body.code.toString() === _V.Global.RES_OK) {
      commit(types.SET_COMPANYCONFIGINFO, res.body.data)
    } else {
      console.warn('setCompanyConfigInfo error!')
    }
  })
}

// 设置系统导航
export const setNavigator = function ({ commit, state }, option = {}) {
  const _V = this._vm
  _V.$http.get(_V.Global.baseURL + _V.Global.api.v2.navigator_get, { params: {} }).then(function (res) {
    if (res.body.code.toString() === _V.Global.RES_OK) {
      commit(types.SET_NAVIGATOR, res.body.data)
    } else {
      console.warn('setNavigator error!')
    }
  })
}

// 设置个人配置信息
export const setIndividualConfigInfo = function ({ commit, state }, option = {}) {
  const _V = this._vm
  _V.$http.get(_V.Global.baseURL + _V.Global.api.UniversalInterface.personalsettingGet, { params: {} }).then(function (res) {
    if (res.body.code.toString() === _V.Global.RES_OK) {
      commit(types.SET_INDIVIDUALCONFIGINFO, res.body.data)
    } else {
      console.warn('setIndividualConfigInfo error!')
    }
  })
}

// 获取系统动态组件下拉框值
export const setSysBoxValue = function ({ commit, state }) {
  const _V = this._vm
  _V.$http.get(_V.Global.baseURL + _V.Global.api.v2.sysBoxValue_get, { params: {} }).then(function (res) {
    if (res.body.code.toString() === _V.Global.RES_OK) {
      commit(types.SET_SYSBOXVALUE, res.body.data)
    } else {
      console.warn('setIndividualConfigInfo error!')
    }
  })
}

// 获取系统动态组件自定义下拉框值
export const setCusBoxValue = function ({ commit, state }) {
  const _V = this._vm
  _V.$http.get(_V.Global.baseURL + _V.Global.api.v2.bizField_query, {
 params: {
    type: 'spinnerValues'
  }
}).then(function (res) {
    if (res.body.code.toString() === _V.Global.RES_OK) {
      commit(types.SET_CUSBOXVALUE, res.body.data)
    } else {
      console.warn('setIndividualConfigInfo error!')
    }
  })
}

// 获取组类型
export const setFieldGroupType = function ({ commit, state }) {
  const _V = this._vm
  _V.$http.get(_V.Global.baseURL + _V.Global.api.v2.dictionary + 'fieldgrouptype', { params: {} }).then(function (res) {
    if (res.body.code.toString() === _V.Global.RES_OK && Array.isArray(res.body.data)) {
      commit(types.SET_FIELDGROUPTYPE, res.body.data)
    } else {
      console.warn('setFieldGroupType error!')
    }
  })
}

// 获取系统后端域名前缀
export const setDomain = function ({ commit, state }) {
  const _V = this._vm
  _V.$http.get(_V.Global.baseURL + _V.Global.api.UniversalInterface.domain, { params: {} }).then(function (res) {
    if (res.body.code.toString() === _V.Global.RES_OK) {
      commit(types.SET_DOMAIN, res.body.data)
    } else {
      console.warn('setFieldGroupType error!')
    }
  })
}

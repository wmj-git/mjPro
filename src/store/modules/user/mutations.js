import {
  SET_CODE, SET_TOKEN, SET_INTRODUCTION,
  SET_SETTING, SET_STATUS, SET_NAME,
  SET_AVATAR,SET_ROLES
} from '../../mutation-types';

export default {
  [SET_CODE]: (state, code) => {
    state.code = code
  },
  [SET_TOKEN]: (state, token) => {
    state.token = token
  },
  [SET_INTRODUCTION]: (state, introduction) => {
    state.introduction = introduction
  },
  [SET_SETTING]: (state, setting) => {
    state.setting = setting
  },
  [SET_STATUS]: (state, status) => {
    state.status = status
  },
  [SET_NAME]: (state, name) => {
    state.name = name
  },
  [SET_AVATAR]: (state, avatar) => {
    state.avatar = avatar
  },
  [SET_ROLES]: (state, roles) => {
    state.roles = roles
  }
};

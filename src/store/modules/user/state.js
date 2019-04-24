import { getToken } from '@/utils/auth'

export default {
  user: '',
  status: '',
  code: '',
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  setting: {
    articlePlatform: []
  }
}

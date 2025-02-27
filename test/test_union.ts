interface User {
  username: string
  password: string
}

interface CompanyUser {
  unionid: string
}

type GenericUser = User | CompanyUser

function display (user: GenericUser): void {
  if (!('username' in user)) {
    console.log(user.unionid)
  } else {
    console.log('普通用户')
    console.log(user.username)
  }
}

display({ username: '123', password: '4356' })

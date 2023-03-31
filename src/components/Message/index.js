// Write your code here
// import Home from '../Home'

const Message = props => {
  const {status} = props
  if (status === 'login') {
    // return 'Welcome User'
    return <h1 className="message">Welcome User</h1>
  }
  //   return 'Please Login'
  return <h1 className="message">Please Login</h1>
}

export default Message

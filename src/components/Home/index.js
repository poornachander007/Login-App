// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {status: 'logout'}

  loginOrlogOut = () => {
    const {status} = this.state
    if (status === 'login') {
      return <Logout />
      //   return 'Logout'
    }
    return <Login />
    // return 'Login'
  }

  change = () => {
    const {status} = this.state
    if (status === 'login') {
      this.setState({status: 'logout'})
    } else {
      this.setState({status: 'login'})
    }
  }

  render() {
    const {status} = this.state
    return (
      <div className="Home">
        <div className="container">
          {/* <h1 className="message">{Message(status)}</h1> */}
          {<Message status={status} />}
          {/* {status === 'login' ? <Logout /> : <Login />} */}
          {/* {this.loginOrlogOut} */}
          <button onClick={this.change} type="button">
            {this.loginOrlogOut()}
          </button>
        </div>
      </div>
    )
  }
}

export default Home

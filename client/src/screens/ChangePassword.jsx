import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { changePassword } from '../services/auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ChangePassword extends Component {
  constructor() {
    super()

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    })

  onChangePassword = async event => {
    event.preventDefault()
    const { history, user } = this.props
    await changePassword(this.state, user.user)
      .then(() =>
        alert(`Your password? Your password. Your password... OH MY GOD, YOUR PASSWORD! IT'S YOUR PASSWORD!!! Oh, yeah, by the way, it's been changed. Congrats on the new password! Is it a boy or a girl? `)
        // console.log('bananas')
      )
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ oldPassword: '', newPassword: '' })
        alert('Your password is... Unchanged')
      })
  }

  render() {
    const { oldPassword, newPassword } = this.state
    console.log(this.props)
    return (
      <div className="row">
        <div className="wormz">
          <h3>Change Password</h3>
          <Form onSubmit={this.onChangePassword}>
            <Form.Group controlId="oldPassword">
              <Form.Label>Old password</Form.Label>
              <Form.Control
                required
                name="oldPassword"
                value={oldPassword}
                type="password"
                placeholder="Old Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="newPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                required
                name="newPassword"
                value={newPassword}
                type="password"
                placeholder="New Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
                        </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(ChangePassword)
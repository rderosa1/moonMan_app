import React, { Component } from 'react'
import { getItems } from '../services/items'
import Routes from '../routes'
import Header from '../screens/Header'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      items: []
    }
  }

  async componentDidMount() {
    try {
      const items = await getItems()
      this.setState({ items })
    } catch (err) {
      console.error(err)
    }
  }

  addItem = item => this.setState({
    items: [item, ...this.state.items],
  })

  editItem = (itemId, item) => {
    const updateIndex = this.state.items.findIndex(element => element._id === itemId),
      items = [...this.state.items];
    items[updateIndex] = item;
    this.setState({
      items
    })
  }

  destroyItem = item => {
    const destroyIndex = this.state.items.findIndex(element => element._id === item._id),
      items = [...this.state.items];
    if (destroyIndex > -1) {
      items.splice(destroyIndex, 1);
      this.setState({
        items
      })
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render() {
    const { user, items } = this.state
    return (
      <div className="container-landing">
        <Header user={user} />
        <main className="container">
          <Routes
            items={items}
            user={user}
            setUser={this.setUser}
            addItem={this.addItem}
            editItem={this.editItem}
            destroyItem={this.destroyItem}
            clearUser={this.clearUser}
          />
        </main>
      </div>
    )
  }
}
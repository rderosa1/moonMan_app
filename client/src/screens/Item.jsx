import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import { getItemById, deleteItem } from '../services/items'

class Item extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: null,
      deleted: false
    }
  }

  async componentDidMount() {
    try {
      const item = await getItemById(this.props.match.params.id)
      this.setState({ item })
    } catch (err) {
      console.error(err)
    }
  }

  destroy = () => {
    const { item } = this.state;
    this.props.destroyItem(item);
    deleteItem(item._id)
    this.setState({ deleted: true })
  }

  render() {
    const { item, deleted } = this.state
    if (!item) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return (
        <Redirect
          to={{
            pathname: '/items',
            state: { msg: 'Item succesfully deleted!' }
          }}
        />
      )
    }

    return (
      <Layout>
        <div className="item">
          <Link to="/items">
            <span> Back to all items</span>
          </Link>
          <h4> {item.title}</h4>
          <p>Description: {item.link}</p>
          <div className="buttons">
            <button className="danger" onClick={this.destroy}>
              Delete Item
                        </button>
            <button
              className="edit"
              onClick={() =>
                this.props.history.push(
                  `/items/${this.props.match.params.id}/edit`
                )
              }
            >
              Edit
                        </button>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Item
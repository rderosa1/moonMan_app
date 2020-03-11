import React from 'react'
import Layout from '../components/shared/Layout'
import { getItems, getItemById, updateItem } from '../services/items'

class Items extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
      searchresult: null
    }
  }

<<<<<<< HEAD
    const renderItems = () => {
        if (items) {
            return items.map(item => {
                return (
                    <div className="item" key={item._id}>
                        <h4>{item.title}</h4>
                            <h5>Add to WishList</h5>
                        {renderButton(item._id)}
                    </div>
                )
            })
        } else {
            return null
        }
=======
  renderButton = (id) => {
    const { history, match, user } = this.props
    if (user) {
      return (
        <button onClick={() => history.push(`${match.url}/${id}`)}>
          See More
                </button>
      )
    } else {
      return null
>>>>>>> 5cfa0c365459a74cd7572951f8686ae24e537852
    }
  }

  renderItems = () => {
    const { items } = this.props
    if (items) {
      return items.map(item => {
        return (
<<<<<<< HEAD
            <Layout>
                <h4>Items here</h4>
                {!items ? <h3>No Items at this time.</h3> : null}
                <div className="item-container">{renderItems()}
                </div>
            </Layout>
=======
          <div className="item" key={item._id}>
            <h4>{item.title}</h4>
            {this.renderButton(item._id)}
          </div>
>>>>>>> 5cfa0c365459a74cd7572951f8686ae24e537852
        )
      })
    } else {
      return null
    }
  }

  handleChange = event => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { items } = this.props
    console.log('submitted')
    if (items) {

      const result = items.filter(item => {
        return item.title === this.state.search
      })
      console.log(result)
      this.setState({
        searchresult: result
      })
    }
  }

  render() {
    // const { history, match, user, items } = props
    const { searchresult } = this.state
    if (searchresult) {
      return (
        <div>
          {this.state.searchresult.map((result) => {
            return(
              <div>
                <h1>{result.title}</h1>
                <h2>{result.link}</h2>
                {this.renderButton(result._id)}
              </div>
            )
          })}
      
        </div>
      )
    }
    else {
      const { user, items } = this.props
      if (user) {
        return (
          < Layout >
            <h4>Items</h4>
            <form onSubmit={this.handleSubmit}>
              <input className="input"
                type="text"
                placeholder="search by title"
                // value={this.state.search}
                onChange={this.handleChange}
              />
              <button
                type="submit"
              >search</button>
            </form>
            {!items ? <h3>No Items at this time.</h3> : null}
            <div className="item-container">{this.renderItems()}</div>
          </Layout >
        )
      } else
        return (
          <div className="landing">
            <h2>Welcome to the Items App!</h2>
            <div className="main">
              {!items ? <h3>No Items at this time.</h3> : null}
              <div className="item-container">{this.renderItems()}</div>
            </div>
          </div>
        )
    }
  }
}


export default Items
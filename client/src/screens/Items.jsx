import React from 'react'
import Layout from '../components/shared/Layout'

class Items extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      triedsearch: false,
      search: '',
      searchresult: []
    }
  }

  renderButton = (item) => {
    const { history, match, user, addItemToWishlist } = this.props
    if (user) {
      return (
        <>
          <button onClick={() => history.push(`${match.url}/${item._id}`)}>
            See More
                  </button>
          <button onClick={() => {addItemToWishlist(item._id)}}>
            Add to Wishlist
          </button>
        </>
      )
    } else {
      return null
    }
  }

  renderItems = () => {
    const { items } = this.props
    if (items) {
      return items.map(item => {
        return (
          <div className="item" key={item._id}>
            <h4>{item.title}</h4>
            {this.renderButton(item)}
          </div>
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
        const title = item.title.toLowerCase()
        const { search } = this.state
        return title.includes(search.toLowerCase())
      })
      
      this.setState({
        triedsearch: true,
        searchresult: result
      })
    }
  }


  render() {
    const { triedsearch, searchresult } = this.state
    if (searchresult.length > 0) {
      return (
        <Layout>
          <div className="search-page">
            {this.state.searchresult.map((result) => {
              return (
                <div className="search-result">
                  <h1>{result.title}</h1>
                  <h2>{result.link}</h2>
                  {this.renderButton(result._id)}
                </div>
              )
            })}

          </div>
        </Layout>
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
                onChange={this.handleChange}
              />
              <button
                type="submit" className="search"
              >search</button>
            </form>
            {triedsearch && <p>No search results found.</p>}
            {!items ? <h3>No Items at this time.</h3> : null}
            <div className="item-container">{this.renderItems()}</div>
          </Layout >
        )
      }
      else
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
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

    addItem = item => this.setState({ items: [...this.state.items, item] })

    setUser = user => this.setState({ user })

    clearUser = () => this.setState({ user: null })

    render() {
        const { user, items } = this.state
        return (
            <>
                <Header user={user} />
                <main className="container">
                    <Routes
                        items={items}
                        user={user}
                        setUser={this.setUser}
                        addItem={this.addItem}
                        clearUser={this.clearUser}
                    />
                </main>
            </>
        )
    }
}
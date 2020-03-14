import React, { Component } from 'react'
import { getItemById } from '../services/items';

export default class Wishlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {
                title: '',
                link: ''
            },
            wishlist: []
            //do we need wishlist here?  the array is passed as props from Container.
        }
    }

    async componentDidMount() {
        try {
            const item = await getItemById();
            this.setState({
                item
            })
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (       
                <h1>Wishlist</h1>
                             
        )
            
    }
}
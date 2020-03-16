import React, { Component } from 'react'
import { getItemById } from '../services/items';

class Wishlist extends Component {
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
        this.wishList()
        try {
            
        } catch (error) {
            
        }
    }

    wishList = async () => {  
        this.props.user.items.map(async(wishitem, index) => {
            try {
            const wishItem = await getItemById(wishitem);
              console.log(wishItem)
              this.setState(prevState=>({ wishlist : [...prevState.wishlist, wishItem ]}));
            } catch (err) { 
              console.error(err);
            }
            
        })
    }

    render() {
        console.log(this.props.user.items[0])
        return (
            <div>
                <h1>Wishlist</h1>
                <div id="wishlist-display">
                {this.state.wishlist.length >0 && this.state.wishlist.map((wishItem)=> {
                    return(
                        <div className="wishitem-info">
                 <h3>{wishItem.title}</h3>
                <h3>{wishItem.link}</h3>
             </div>
                    )
                })}
            </div>
            </div>
            )
                {/* <ul>
                    {this.props.user.items.map((wish) => {
                        try {
                            const wishItems = getItemById(wish);
                          console.log(wishItems)
                          this.setState({ wishlist : wishItems });
                        } catch (err) { 
                          console.error(err);
                        }
                        <li>
                        {wish.title}
                        </li>
                    })}

                    
                </ul> */}
            {/* </div> */}
        
    }
}

export default Wishlist
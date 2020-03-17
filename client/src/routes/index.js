import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/Home'
import Landing from '../screens/Landing'
import SignIn from '../screens/SignIn'
import SignOut from '../screens/SignOut'
import SignUp from '../screens/SignUp'
import Item from '../screens/Item'
import Items from '../screens/Items'
import ItemCreate from '../screens/ItemCreate'
import ItemEdit from '../screens/ItemEdit'
import Wishlist from '../screens/Wishlist'


import AuthenticatedRoute from './AuthenticatedRoute'
const Routes = ({ user, items, setUser, clearUser, addItem, editItem, destroyItem, addItemToWishlist, wishlist, deleteItemFromWishlist, theme, setTheme}) => (

  <Switch>
    <Route
      exact
      path="/"
      render={props => (user ? <Home user={user} /> : <Landing {...props} items={items} theme={theme} setTheme={setTheme}/>)}
    />
    <Route
      path="/sign-in"
      render={props => <SignIn {...props} setUser={setUser} />}
    />
    <Route
      path="/sign-up"
      render={props => <SignUp {...props} setUser={setUser} />}
    />
    <Route
      exact
      path="/sign-out"
      render={props => <SignOut {...props} clearUser={clearUser} user={user} />}
    />
    <AuthenticatedRoute
      exact
      path="/items"
      user={user}
      render={props => <Items {...props} user={user} items={items} addItemToWishlist={addItemToWishlist} />}
    />

    <AuthenticatedRoute
      exact
      path="/wishlist"
      user={user}
      render={props => <Wishlist {...props} user={user} addItemToWishlist={addItemToWishlist}wishlist={wishlist} deleteItemFromWishlist={deleteItemFromWishlist}/>}
      />

    <AuthenticatedRoute
      exact
      path="/items/:id"
      user={user}
      render={props => <Item {...props} destroyItem={destroyItem} />}
    />
    <AuthenticatedRoute
      exact
      user={user}
      path="/items/:id/edit"
      render={props => <ItemEdit {...props} editItem={editItem} />}
    />
    <AuthenticatedRoute
      user={user}
      path="/create"
      render={props => <ItemCreate {...props} addItem={addItem} />}
    />
  </Switch>
)

export default Routes
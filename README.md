# 👾 moonMan 🌖

[moonMan](http://moonman.surge.sh/ "moonMan, never forget to wonder") is a fully functional CRUD app with authentication and authorization. It was designed by our team as part of the Mandalorians winter 2020 Software Engineering Immersive cohort at General Assembly.  Our team was shown a very broken brownfield app and charged with numerous bug fixes, new features, and overhauling the design start-to-finish. 

## moonMan is a web app for people who feel more at home looking up into the stars than they do lounging in their Earthly homes.

With the newly redesigned moonMan app, use the interactive and intuitive interface to easily browse through a collection of new and used space ship parts that, when all put together, will allow you to travel the expanse of virtual space.

#### Don’t see the parts you need?

- Search, add, edit, and delete parts as needed.
- Add favorite parts to your wishlist and off you go! Whether you are trying to find the planet on which you were probably born, or if you're just visiting.
- Includes authentication and authorization.

## moonMan team:

- Mary Mac Murray,
- Ro Cosenza,
- Jonathan Hernandez,
- Rico DeRosa

## Colors

<img src="https://github.com/marymacmurray/done4today/blob/develop/color-palette.png">

## Wireframes

#### Mobile

<img src="mobile-mockup3.png">

#### Desktop

<img src="https://github.com/marymacmurray/done4today/blob/develop/desktop-mockup.png">

## 👩🏽‍🚀 Feature List

Features of moonMan include:

- User Auth(Sign in/Sign up/Auth view)
- CRUD Operations
- Wishlist feature
- Search feature

### 🚀 MVP

- User Auth(Sign in/Sign up/Auth view)
- CRUD Operations
- Wishlist functionality:
  - User creates a wishlist
  - User adds items to wishlist
  - User deletes items from wishlist
  - Homepage shows wishlist
- Search functionality
  - Includes a search bar

#### MongoDB with mongoose Data Model Design

moonMan has a normalized one-to-many data model design with document references.  In the user document we are creating a reference to each item document to avoid repetition of the item data inside the user.  This is the foundation of the wishlist feature.

Pros of this model:  
1. User document stays small, making it efficient to request all users or a specific user. 
2. Users can have many items without compromising space in the user document. 
3. If we want the items data we can request it from the items collection based on the item id found in the user document (as you see in our wishlist feature).

Cons of this model: 

If in the future, the client requests to add a feature where intergallactic suppliers could view user data for each of their items, gathering that data would require many calls to the db for a single item(not DRY).

```
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'items' }]

  },
  { timestamps: true }
)
```


### 🌟 Post-MVP:

- React-Bootstrap Material UI

  - Animation effects for certain clicks
  - Interactive 404 page as well as a loading icon/page

- Screen for Meteor and Asteroid alerts (asteroid alert api required).
- Facts section of UFO sightings with suggested items to purchase to prepare.
- Marketplace to hire fellow space-goers and friendly aliens as travel companions/navigators/general crew members.
- Add images to each item
- Sound effects

### 🗒️ Component Hierarchy:

```
Container
  |__ Browse items
    |__ Wishlist
    |__ Search
```

### 📦 Dependencies:

FrontEnd:

- react/react router
- react styled themes
- axios
- cors
- bcrypt
- body-parser
- particles.js from https://vincentgarreau.com/particles.js/

Backend:

- faker (we still using this?)
- mongoDB/mongoose
- express
- morgan

Testing:

- Jest

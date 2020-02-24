# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SOFTWARE ENGINEERING IMMERSIVE

# Authentication

![](https://i.imgur.com/MkAOKAZ.gif)

## Prerequisites

- Express & React CRUD

## Learning Objectives

By the end of this, students should be able to:

- Understand how to store passwords (we don't)
- Implement JWT Authentication

## Framing (5min)

Turn & Talk with your neighbor and answer the following:

- What is Authentication?
- What is Authorization?

**Bonus**: What is the difference between [hashing vs encrypting](https://gcn.com/articles/2013/12/02/hashing-vs-encryption.aspx)?

## Introduction

What is Authentication? Well it's the hardest topic in our curriculum. Ok joke aside, what is Auth?

We have learned how to create full-stack applications. There is a problem though. Often we want to limit what a user has access to. So how do we handle this? Welcome.. Authentication.

Authentication proves that the user is who they say they are. Authentication gives identity. And with that "identity" we can "authorize" the user to access whatever resources we would like to allow them to access.

The concept is a user can sign up and sign in aka authenticate. Then for specific resources we can check if they're authenticated - if they are, then allow them to interact with the resource otherwise, tell them they do not have access.

Before we get into implementation we need to go over a few key concepts.

## Concepts

### Authentication

Authentication is the ability to give users an identity that we can track.

- Authentication is who the user is
- We can use a JSON Web Token (JWT) as a means for authentication

> JSON Web Token is a standard used to create access tokens for an application.
> It works this way: the server generates a token that certifies the user identity, and sends it to the client.
> The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity.
> This architecture proves to be very effective in modern Web Apps, where after the user is authenticated we perform API requests...
> -- https://flaviocopes.com/jwt

### Authorization

- Authorization is (now that we know who the user is - Authentication) what can this user do? This is where define what resources the user has access to and what actions (CRUD) the user can perform on those resources

A JSON Web Token (JWT) can be a "claim" of who the user is (Authentication) and what the user can do (Authorization)

### [Hashing](https://medium.com/tech-tales/what-is-hashing-6edba0ebfa67)

Hashing is a one-way function that uses an algorithm to scramble text into a unique digest. It is common practice to hash passwords and store them in a database, rather than store plaintext passwords in databases, that way, if the database is compromised a hacker would gain access to hashed passwords and not the plaintext password (which in all likelihood is used as a password for other websites!)

### Encryption

Encryption is a two-way function that can encrypt or decrypt via a unique secret key.

### Salt Rounds

A Salt Round is a random character or characters that is added to the hashing process to increase the complexity of the hash and make it virtually impossible to crack.

### [JSON Web Token or JWT (pronounced JOT)](https://jwt.io/introduction)

JSON Web Token (JWT) is encoded data that is cryptographically signed with a secret that can act like a "key". It can be sent to a client as proof of authenticity and sent back to the server on subsequent requests as proof of the client's authenticity.

### JWT Secret (or Key)

The JWT Secret is what we use to sign the JWT and make it unique. The idea is that we generate a unique JWT Token with the JWT Secret, we then send that token to a client as a way to give that client some identity (that identity usually comes with some privileges - authorization). The client includes the JWT with every request as "proof" of who they are. The server checks if that JWT is a valid token by checking it against the JWT Secret.

### Payload

The payload is whatever data we choose to send within the JWT. Keep in mind this data can be seen by anyone who obtains the JWT so refrain from adding sensitive information e.g. passwords. Also, make sure to use HTTPS so the JWT is encrypted so the data can only be seen between client and server.

> The payload is typically where we set the "cliams" for the user, or in other words, who the user is and what they're allowed to do e.g. user id, username or email, user role

### JWT Signing

JWT consists of 3 parts: header, payload, and signature. The header is where we define the algorithm we are going to use to create the signature. The payload is data we use to generate the signature. The signature is the result of the algorithm along with the secret, applied on the header and payload.

```js
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiL
CJ1c2VybmFtZSI6ImpvaG4uZG9lIiwiZW1haWwiOiJqb2huQGR
vZS5jb20ifQ.bJLrnPXWerJO6GSyUQWWuEKWiN - ufXqygrj1fng8vd8
```

JWT signing creates the signature, and outputs the JWT.

> Typically, we sign the Header, Payload, and JWT Secret using an HMAC SH-256 algorithm

### JWT Verify

This is where we compare the JWT we recieved from the client with a JWT we generate on the server with the secret and the same payload the client has. If the two tokens match, we get back the payload.

# Hand-Rolling Our Own Authentication System

Let's now go into the details of how we can implement our own authentication system, particularly:

- creating password digests, so we don't store plaintext passwords in our database and
- using JWTs to create a token-based authentication system

Let's look at Sign Up first!

## Sign Up

![](https://i.imgur.com/i3E7rf7.png)

1. User fills out sign up form on the react app
2. User clicks submit, an axios POST request with a user object stored in the body of the request is created and sent to the `/signup` endpoint on the express server
3. We de-structure the request body - pulling out `username`, `email`, and `password`. We now create a `password_digest` by using `bcrypt`'s `hash` method to **encrypt** the user's `password` with a `SALT_ROUND` of 11
4. We can now create the user with the password digest and store that user in our database
5. Using a `TOKEN_KEY` we create a [JWT library](https://jwt.io) Token with a `payload` set to the user's credentials (`id`, `username`, `email`)
6. The Express server responds with the newly created `token` and `user` object
7. Our React app takes the `token` and stores it in [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) so the user can remain logged in even when we reload the webpage

## Sign In

![](https://i.imgur.com/WNgiSHK.png)

1. The user fills out the sign in form on the react app
2. User clicks submit, an axios POST request with a user object stored in the body of the request is created and sent to the `/signin` endpoint on the express server
3. We de-structure the request body - pulling out `username` and `password`. We use the `username` to find that specific user in our database to grab the `password_digest` for that user
4. We user `bcrypt.compare` method to `hash` the `password` and compare it with the `password_digest` - if they match, then that user is who they say they are
5. We create a JWT token and send it back along with the user as a response

## Accessing a Protected Resource

![](https://i.imgur.com/Bd7Njdy.png)

1. The user fills out the update form to edit a specific item
2. In our React app we check if there is a token in localStorage
3. We grab the token in localStorage and construct an axios PUT request with the token in the `header` of the request and the `item` object (with the modifications) in the body of the request
4. On our Express server we parse the `header` to grabe the token. We verify if the token is the original token using the `jwt.verify` method and the unique `TOKEN_KEY`
5. If the token is legit, we make the update in the database
6. We respond with the updated item

## Conclusion

Authentication is found in nearly every application we interact with. In this lesson we learned how to handroll our own authentication system. This has given us a thorough understanding of how authentication works. However, because authentication is what protects our application from unauthorized access it is crucial we use highly secure authentication system. We highly recommend, in real-world applications to use industry vetted third-party authentication libraries.

✊ **Fist to Five**

-- Happy Coding :)

## Feedback

> [Take a minute to give us feedback on this lesson so we can improve it!](https://forms.gle/vgUoXbzxPWf4oPCX6)

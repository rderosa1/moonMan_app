import React from 'react'
import Layout from '../components/shared/Layout'

const Home = (props) => (
    <Layout user={props.user}>
    <h4>Welcome to the items app!</h4>
    </Layout>
)

export default Home
import React from "react"

import Layout from "../components/Layout"
import Header from "../components/Header"
import HeroBanner from "../components/HeroBanner"
import Products from "../components/Products"

const IndexPage = () => (
    <Layout>
        <Header />
        <HeroBanner />
        <Products />
    </Layout>
)

export default IndexPage

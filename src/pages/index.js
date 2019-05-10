import React from "react"

import Layout from "../components/Layout"
import Header from "../components/Header"
import HeroBanner from "../components/HeroBanner"
import Products from "../components/Products"
import About from "../components/About"
import Upcoming from "../components/Upcoming"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => (
    <Layout>
        <Header />
        <HeroBanner />
        <Products />
        <About />
        <Upcoming />
        <Contact />
        <Footer />
    </Layout>
)

export default IndexPage

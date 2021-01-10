import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />
    
  </Layout>
)

export default IndexPage

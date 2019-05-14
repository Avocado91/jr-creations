import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import "sanitize.css"

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={(data) => (
            <>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        { name: "description", content: "Sample" },
                        { name: "keywords", content: "sample, something" },
                    ]}
                >
                    <html lang="en" />
                    <title>JR Creations</title>
                    <meta charSet="utf-8" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Dancing+Script|Roboto:300,400"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
                        crossorigin="anonymous"
                    />
                </Helmet>
                {/*<h1>{data.site.siteMetadata.title}</h1>*/}
                <div>{children}</div>
            </>
        )}
    />
)

export default Layout

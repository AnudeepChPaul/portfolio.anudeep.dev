import * as React from 'react'
import { graphql } from 'gatsby'
import './index.scss'
import { AppContext } from '../Context'
import Intro from '../components/intro/Intro'

const IndexPage = ({ data }: { data: { site: { siteMetadata: { title: string } } } }) => {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <React.StrictMode>
      {/*<Helmet title={data.site.siteMetadata.title}>*/}
      {/*  <script type="application/ld+json">*/}
      {/*    {` {*/}
      {/*      "@context": "https://schema.org",*/}
      {/*      "@type": "Organization",*/}
      {/*      "url": "https://portfolio.anudeep.dev",*/}
      {/*      "name": "Anudeep Chandra Paul",*/}
      {/*      "contactPoint": {*/}
      {/*        "@type": "ContactPoint",*/}
      {/*        "telephone": "+91-7676250625",*/}
      {/*        "contactType": "Personal Phone"*/}
      {/*      }*/}
      {/*    } `}*/}
      {/*  </script>*/}
      {/*</Helmet>*/}
      <AppContext.Consumer>
        {({ intro }: { intro: { header: string, description: string, tagline: string } }) => (
          <Intro {...intro}/>
        )}
      </AppContext.Consumer>
    </React.StrictMode>
  )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`

export default IndexPage

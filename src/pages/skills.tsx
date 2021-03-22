import * as React from 'react'
import { AppContext } from '../Context'
import Skills from '../components/skills/Skills'

const IndexPage = ({ data }: { data: { site: { siteMetadata: { title: string } } } }) => {
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
        {({ intro, companies }) => (
          <Skills/>
        )}
      </AppContext.Consumer>
    </React.StrictMode>
  )
}

export default IndexPage

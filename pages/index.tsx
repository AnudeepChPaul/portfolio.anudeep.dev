import * as React from 'react'
import { AppContext } from '@libs/Context'
import Intro from '@libs/components/intro/Intro'

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
        {({ intro }: {intro: any }) => (
          <Intro {...intro}/>
        )}
      </AppContext.Consumer>
    </React.StrictMode>
  )
}

export default IndexPage

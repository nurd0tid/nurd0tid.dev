import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import config from '../utils/config'
import floppy from '../assets/error-404.png'

// markup
export default function FourOhFour() {
  return (
    <Layout>
      <Helmet title={`404 |  ${config.siteTitle}`} />
      <SEO />

      <article>
        <header>
          <div className="container">
            <h1>404</h1>
            <p className="description">This was probably a mistake.</p>
          </div>
        </header>

        <section>
          <div className="container">
            <img src={floppy} alt="404" className="not-found-image" />
          </div>
        </section>
      </article>
    </Layout>
  )
}

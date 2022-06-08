import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import config from '../utils/config'
import dino from '../assets/dino-404.gif'

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
            <p className="description">Haaaaaaa, where am I.</p>
          </div>
        </header>

        <section>
          <div className="container">
            <img src={dino} alt="404" className="not-found-image" />
          </div>
        </section>
      </article>
    </Layout>
  )
}

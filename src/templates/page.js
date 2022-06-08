import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import config from '../utils/config'

export default function PageTemplate({ data }) {
  const post = data.markdownRemark
  const { title, description, slug } = post.frontmatter

  return (
    <>
      <Helmet
        title={`${title === 'Tania Rascia' ? 'Resume' : title} | ${
          config.siteTitle
        }`}
      />
      <SEO />

      <article id={slug}>
        <header>
          <div className="container">
            <h1>{title}</h1>
            <p className="description">{description}</p>
          </div>
        </header>

        <section
          className="container"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </>
  )
}

PageTemplate.Layout = Layout
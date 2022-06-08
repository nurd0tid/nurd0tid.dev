import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import config from '../utils/config'

// markup
export default function resume() {
  return (
    <Layout>
      <Helmet title={`Resume |  ${config.siteTitle}`} />
      <SEO />

      <article id="resume">
      <header>
        <div className="container">
          <h1>Muhamad Nur</h1>
          <p className="description">Web Developer in Indonesia, Jakarta</p>
        </div>
      </header>

        <section className='container'>
          <ul>
            <li><strong>Email</strong> - mnur29054 [at] gmail [dot] com</li>
            <li><strong>GitHub</strong> - <a href="https://github.com/nurd0tid">nurd0tid</a></li>
          </ul>

          <h2>Experience</h2>
          <h3>
            Staff IT
            <span>2021 Mei - 2021 Oct</span>
          </h3>
          <p><strong>Lembaga Sertifikasi Manajemen Risiko</strong> — <em>Pakuwon Tower, JakSel</em></p>

          <h2>Skills</h2>
          <ul>
            <li><strong>Languages</strong> - Node.js, JavaScript (React/Redux, Vue), TypeScript, GraphQL, SQL, PHP, Python, Bash, HTML5, CSS3, JSON</li>
            <li><strong>Concepts</strong> - Web Application Development, Design Patterns (REST API Design, MVC), Databases (Postgres, SQL), Authentication and Security (OAuth2, OpenID Connect, SSO, JWT), Linux/UNIX Administration, Webpack, Electron, Version Control (Git), AWS Infrastructure (EC2, Route 53, RDS), Testing (Unit, Component, Integration, End-to-end)</li>
          </ul>

          <h2>Education</h2>
          <h3>
            SMK Media Informatika
            <span>2017 - 2020</span>
          </h3>
          <p><strong>Rekayasa Perangkat Lunak</strong> — <em>Pesanggrahan, JakSel</em></p>
        </section>
      </article>
    </Layout>
  )
}

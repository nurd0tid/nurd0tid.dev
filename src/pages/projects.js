import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import config from '../utils/config'
import ongkirKu from '../../content/thumbnails/ongkirku.png'
import prakerja from '../../content/thumbnails/prakerja-ui.png'
import ApiPortfolio from '../../content/thumbnails/json-apiport.png'
import sibes from '../../content/thumbnails/sibes.png'
import covid19 from '../../content/thumbnails/kawal-corona.png'
import wenus from '../../content/thumbnails/nusantara-comp.png'
import github from '../assets/nav-github.png'

const projectsList = [
  {
    name: 'Ongkirku',
    slug: 'ongkirku-nodejs',
    tagline: 'A free, open source rest api check cost & tracking package for the web.',
    image: ongkirKu,
    url: '/',
  },
  {
    name: 'We Are Nusantara',
    image: wenus,
    slug: '',
    tagline: 'Company profile project to display client products, created using wordpress.',
    url: 'https://www.wearenusantara.com/',
  },
  {
    name: 'SIBES - App',
    image: sibes,
    slug: '',
    tagline: 'Database Information System Using Codeigniter 4, to store value and certification data, in the company where I worked previously.',
    url: '/',
  },
  {
    name: 'Kawal Corona',
    image: covid19,
    slug: 'Kawal-Corona-Codeigniter-3',
    tagline: 'Kawal Corona Information System, using Rest API, to display static data, infected with covid19 cases, global and national and mapping infected area.',
    url: 'https://kawalcorona19.herokuapp.com/',
  },
  {
    name: 'Api Portfolio',
    slug: 'apiportf-nodejs',
    tagline: 'A free, open source rest api portfolio for the web, build with NodeJS + ExpressJS + MySQL',
    image: ApiPortfolio,
    url: '/',
    writeup: '/membuat-restful-api-node-js-express-mysql-crud'
  },
  {
    name: 'UI - KIT Prakerja',
    image: prakerja,
    slug: 'UI-KIT-Prakerja',
    tagline: 'Prakerja UI-KIT is a Prakerja UI/UX Clone, both from the landing page, login, and register, which is made using css and bootstrap.',
    url: '/',
  },
]

export default function ProjectsIndex() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    async function getStars() {
      const repos = await fetch(
        'https://api.github.com/users/nurd0tid/repos?per_page=100'
      )

      return repos.json()
    }

    getStars()
      .then((data) => {
        setRepos(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Layout>
      <Helmet title={`Projects | ${config.siteTitle}`} />
      <SEO />

      <article>
        <header>
          <div className="container">
            <h1>Projects</h1>
            <p className="description">
              A few highlights of my open-source projects. View them all{' '}
              <a href="https://github.com/nurd0tid">on GitHub</a>.
            </p>
          </div>
        </header>

        <section className="projects large container">
          {projectsList.map((project) => (
            <div className="project" key={project.name}>
              <h2>{project.name}</h2>
              {project.image && <img src={project.image} alt={project.name} />}
              <div className="links tags">
                {project.writeup && <Link to={project.writeup}>Write-up</Link>}
                <a
                  href={`https://github.com/nurd0tid/${project.slug}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </a>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                )}
              </div>
              <p className="description">{project.tagline}</p>
              <div className="stars">
                {repos.find((repo) => repo.name === project.slug) && (
                  <>
                    <img src={github} alt="Stargazers" />
                    <span>
                      <a
                        href={`https://github.com/nurd0tid/${project.slug}/stargazers`}
                      >
                        {Number(
                          repos.find((repo) => repo.name === project.slug)
                            .stargazers_count
                        ).toLocaleString()}
                      </a>
                      {` stars on GitHub`}
                    </span>
                    <span></span>
                  </>
                )}
              </div>
            </div>
          ))}
        </section>
      </article>
    </Layout>
  )
}
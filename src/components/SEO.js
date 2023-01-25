import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { Helmet } from "react-helmet"

export const Seo = ({ lang, title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    lang: 'en'
  }

  return (
    <Helmet htmlAttributes={{lang: seo.lang}}>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>⏰</text></svg>" />
      {children} 
    </Helmet>
  )
}


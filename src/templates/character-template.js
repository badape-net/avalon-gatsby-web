import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const page = data.directus.character[0]
  console.log(page)

  return (
    <Layout>
      <div>
        <h1>{page.name}</h1>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    directus {
      character(filter: {slug: {_eq: $slug}}) {
        cost
        name
        description
        gender
        health_regen_rate
        mana_regen_rate
        max_health
        max_mana
        max_stamina
        move_speed
        name
        species {
          name
        }
        stamina_regen_rate
      }
    }
  }
`
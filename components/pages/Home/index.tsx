import Head from 'next/head'
import React from 'react'

import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>NextJS Template</title>
      </Head>
      <h1>NextJS with Styled Components, Typescript, ESLint and Prettier</h1>
    </Container>
  )
}

export default Home

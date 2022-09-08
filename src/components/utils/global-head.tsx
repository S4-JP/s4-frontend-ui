import React from 'react'
import Head from 'next/head'

interface Props {
  title?: string
}

const rootUrl = '/'

const GlobalHead: React.FC<Props> = (props) => {
  return (
    <Head data-testid="utils-gh-head">
      {props.children}
      <title data-testid="utils-gh-title">
        {props.title ? props.title + ' | S4' : 'S4'}
      </title>
      <link rel="icon" href={rootUrl + 'favicon.ico'} />
    </Head>
  )
}

export default GlobalHead

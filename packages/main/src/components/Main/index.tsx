import React from 'react'

export type MainAppProps = {
  loading?: boolean
}

function Main(props: MainAppProps) {
  const { loading } = props
  return (
    <>
      {loading && <span>loading...</span>}
      <div id="subapp-viewport" />
    </>
  )
}

export default Main

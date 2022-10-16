import React from 'react'

export type MainAppProps = {
  loading?: boolean
}

function Main(props: MainAppProps) {
  const { loading } = props
  return (
    <>
      <h1 className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent text-9xl bg-clip-text font-extrabold">
        Hello World
      </h1>
      <div>{loading && <span>loading...</span>}</div>
      <div id="subapp-viewport" />
    </>
  )
}

export default Main

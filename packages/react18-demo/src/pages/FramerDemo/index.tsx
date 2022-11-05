import React, { useEffect, useMemo, useRef, useState } from 'react'
import './style.css'

const FramerPlayground = React.lazy(
  () => import('@shared/components/FramerPlayground')
)

// mf 不支持带变量的 import，所以需要把 import 返回的 promise 作为参数传入
// https://github.com/webpack/webpack/issues/12167
// https://github.com/module-federation/module-federation-examples/issues/1323
// todo: better ts infer
function useDynamicDeps(imports: Promise<{ default: any }>[]) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [deps, setDeps] = useState<any[]>()
  const promiseRef = useRef(Promise.all(imports))

  useEffect(() => {
    promiseRef.current
      .then((resultDeps) => setDeps(resultDeps))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return {
    loading,
    error,
    deps,
  }
}

function FramerDemo() {
  const { loading, deps, error } = useDynamicDeps([import('@shared/deps/mui')])
  const mui = deps?.[0]?.default
  const createTheme = mui?.createTheme
  const ThemeProvider = mui?.ThemeProvider

  const theme = useMemo(
    () =>
      createTheme?.({
        palette: {
          primary: {
            main: '#ffc0cb',
          },
          secondary: {
            main: '#edf2ff',
          },
        },
      }),
    [createTheme]
  )

  if (loading) {
    return 'loading'
  }

  if (error) {
    return 'loading error'
  }

  return (
    <div className="framer-demo-wrap">
      <div className="playground-wrap">
        <ThemeProvider theme={theme}>
          <FramerPlayground />
        </ThemeProvider>
      </div>
    </div>
  )
}

export default FramerDemo

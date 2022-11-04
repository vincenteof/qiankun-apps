import '../public-path'

async function bootstrapWithoutQiankun() {
  if (!window.__POWERED_BY_QIANKUN__) {
    const { render } = await import('./bootstrap')
    render({})
  }
}

bootstrapWithoutQiankun()

const umountHandlerRef: { current?: () => void } = { current: undefined }

export async function bootstrap() {
  console.log('[react18] react demo bootstrapped')
}

export async function mount(props: any) {
  console.log('[react18] props from main framework', props)
  const { render, unmount } = await import('./bootstrap')
  render({})
  umountHandlerRef.current = unmount
}

export async function unmount() {
  console.log('[react18] react demo unmount')
  umountHandlerRef.current?.()
}

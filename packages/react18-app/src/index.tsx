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
  console.log('[react18] react app bootstrapped')
}

// react 渲染逻辑会用到 remote 提供的依赖，因为对应逻辑必须放在一个异步边界里
// 异步加载边界不好理解，可以用 webpack 文档中 Module Federation 介绍中的一句话来说明：加载 remote module ，必须在任意一个异步 chunk 加载之后执行
export async function mount(props: any) {
  console.log('[react18] props from main framework', props)
  const { render, unmount } = await import('./bootstrap')
  render({})
  umountHandlerRef.current = unmount
}

export async function unmount() {
  console.log('[react18] react app unmount')
  umountHandlerRef.current?.()
}

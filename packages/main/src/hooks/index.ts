import { useEffect, useState } from 'react'

function useHref() {
  const [href, setHref] = useState(location.href)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (location.href !== href) {
        setHref(location.href)
      }
    })
    const config = { subtree: true, childList: true }
    observer.observe(document, config)
    return () => {
      observer.disconnect()
    }
  }, [href])

  return href
}

export function useCurrentSubApp(
  navConfig: { key: string; [otherProp: string]: unknown }[]
) {
  const href = useHref()
  return navConfig.find((conf) => href.includes(conf.key))
}

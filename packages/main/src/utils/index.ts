export function push(subapp: string) {
  history.pushState(null, subapp, subapp)
}

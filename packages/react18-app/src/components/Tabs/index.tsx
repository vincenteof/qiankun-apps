import React, { MouseEventHandler } from 'react'
import clx from 'classnames'

interface TabsProps {
  items: TabItem[]
  onChange?: (item: TabItem) => void
  selectedValue?: any
}

// https://flowbite.com/docs/components/tabs/

function Tabs(props: TabsProps) {
  const { items, onChange, selectedValue } = props
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      {items.map((item, idx) => {
        return (
          <li className="mr-2" key={`${item.value}-${idx}`}>
            <TabItem
              label={item.label}
              onClick={(e) => {
                e.preventDefault()
                onChange?.(item)
              }}
              selected={selectedValue === item.value}
            />
          </li>
        )
      })}
    </ul>
  )
}

interface TabItem {
  label: string
  value: any
}

interface TabItemProps {
  label: string
  selected?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
}
function TabItem(props: TabItemProps) {
  const { label, selected, onClick } = props
  const selectedClasses = selected
    ? 'text-white bg-blue-600 active'
    : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
  return (
    <a
      href="#"
      className={clx('inline-block py-3 px-4 rounded-lg', selectedClasses)}
      onClick={onClick}
    >
      {label}
    </a>
  )
}

export default Tabs

import styled from 'styled-components'
import components from './components'

export const createLibrary = components =>
  components.reduce(
    (a, b) =>
      Object.assign(a, {
        [b.name]: b.component
      }),
    {}
  )

const createComponent = (config, components) => {
  const { name, type, props, style } = config

  if (!type || !props || !style) return null

  const component = hoc(style, props)(type)

  return component
}

const hoc = (style, props) => tag =>
  styled(tag).attrs(Object.assign({}, props, style))

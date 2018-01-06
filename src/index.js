import components from './components/index'
import { createLibrary } from './util'

const library = createLibrary(components)
const Dean = Object.assign({}, library)

export default Dean

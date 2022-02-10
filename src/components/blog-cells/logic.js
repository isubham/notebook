import { List, Map } from 'immutable'
import { guid } from '../../utils/guuid'

export const getRef = (value) => value.get('ref')

export const newBlogCell = (ref) => Map({ ref: ref, value: '', id: guid(), versions: List([]) })
export const createListFromArray = (value) => List(value)
export const insertInList = ({ list, pos, value }) => list.insert(pos, value)

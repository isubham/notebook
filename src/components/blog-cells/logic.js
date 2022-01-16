import { List, Map } from 'immutable';

export const getRef = (value) => value.get('ref')

export const getVisibility = (index, cells) => {
  return true
  return index < cells.size - 1
}

export const newBlogCell = (ref) => Map({ ref: ref, value: '' })
export const createListFromArray = (value) => List(value)
export const insertInList = ({list, pos, value}) => list.insert(pos, value)


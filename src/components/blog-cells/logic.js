import { List, Map } from 'immutable';

export const getRef = (value) => value.get('ref')

export const newBlogCell = (ref) => Map({ ref: ref, value: '' })
export const createListFromArray = (value) => List(value)
export const insertInList = ({list, pos, value}) => list.insert(pos, value)


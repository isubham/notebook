import { Map } from 'immutable'
import { createListFromArray, getRef, insertInList, newBlogCell } from '../logic'

describe('blog-cell logic', () => {
  test('getRef should return value', () => {
    expect(getRef(Map({ ref: '1' }))).toBe('1')
    expect(getRef(Map({ _ref: '1' }))).toBe(undefined)
  })

  test('newBlogCell', () => {
    const blogCell = newBlogCell(1)
    expect(blogCell.get('ref')).toBe(1)
    expect(blogCell.get('value')).toBe('')
  })

  test('createListFromArray', () => {
    const newList = createListFromArray([1, 2])
    expect(newList.size).toBe(2)
    expect(newList.get(0)).toBe(1)
    expect(newList.get(1)).toBe(2)
  })

  test('insertInList', () => {
    const newList = createListFromArray([1, 2])
    const newList2 = insertInList({ list: newList, pos: 0, value: 0 })
    // NOTE old list remain same
    expect(newList.get(0)).toBe(1)
    expect(newList.get(1)).toBe(2)

    // NOTE new List is return which needs to assigned in return statment
    expect(newList2.get(0)).toBe(0)
    expect(newList2.get(1)).toBe(1)
    expect(newList2.get(2)).toBe(2)
  })
})

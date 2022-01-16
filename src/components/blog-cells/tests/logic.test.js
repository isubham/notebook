import { List } from "immutable"
import { getVisibility } from "../logic"

describe('blog-cell logic', () => {

  test('getVisibility with 2 elements on first element should return true', () => {
    const cells  = List([1, 2])
    const index = 0
    expect(getVisibility(index, cells)).toBe(true)

  })

  test('getVisibility with 2 elements on 2nd element should return false', () => {
    const cells  = List([1, 2])
    const index = 1
    getVisibility(index, cells)
    expect(getVisibility(index, cells)).toBe(false)
  })
})
import encodeName from './index'

describe('SQLite encodeName', () => {
  it('encodes names', () => {
    expect(encodeName(`from`)).toBe(`"from"`)
    expect(encodeName(`tasks`)).toBe(`"tasks"`)
  })
})

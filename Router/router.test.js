const { router } = require('./index')

test('add 1 + 4 to equal 5', () => {
    expect(router([1, 2, 3, 4])).toBe(10)
})
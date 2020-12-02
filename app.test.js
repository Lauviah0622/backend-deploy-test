
const add = (a, b) => {
    return a + b
}


test('add 1 + 4 to equal 5', () => {
    expect(add(1, 4)).toBe(5)
})
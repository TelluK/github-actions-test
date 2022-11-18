const addition =  require("../src/addition")

it('4 + 6 = 10', () => {
  expect(addition(4, 6)).toBe(10)
})

it('10 + 15 = 25', () => {
  expect(addition(10, 15)).toBe(25)
})
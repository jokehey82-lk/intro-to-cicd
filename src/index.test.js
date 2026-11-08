const sayHi = require('./index.js')

test("Says 'Hello Mike' when 'Mike' is passed", () => {
   expect(sayHi('Mike')).toBe('Hello Mike')
})

test("Does not say 'Hello there Mike' when 'Mike' is passed", () => {
   expect(sayHi('Mike')).not.toBe('Hello there Mike')
})

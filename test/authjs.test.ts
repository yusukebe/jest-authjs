import GitHub from '@auth/core/providers/github'

test('should pass', () => {
  GitHub({
    clientId: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string,
  })
  expect(1).toBe(1)
})

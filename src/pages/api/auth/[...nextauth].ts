import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: "486fa109309a724aafc5" ,
      clientSecret: "eef1c33eff35d11fc7a1575c4ee5c1485a044464"
    }),
  ]
})
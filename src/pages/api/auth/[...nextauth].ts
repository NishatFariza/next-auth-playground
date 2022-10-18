import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: "Iv1.42cce36994f62aba" ,
      clientSecret: "b1d7170143834a0af3c560bbddb3491d8ff3ae7f",
    }),
  ];
})
import { dbConnect } from "./mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { compare } from "bcrypt";
import users from "@/app/model/users";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  adapter: MongoDBAdapter(dbConnect),
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password",
        },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          return null;
        }
        const existingUser = await users.findOne({
          email: credentials.email,
        });

        if (!existingUser) {
          return null;
        }
        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
        );
        if (!passwordMatch) {
          return null;
        }

        return {
          id: existingUser.id,
          email: existingUser.email,
          firstName: existingUser.firstName,
          lastName: existingUser.lastName,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          name: `${user.firstName} ${user.lastName}`,
        };
      }
    },
    async session({ session }) {
      return {
        ...session,
      };
    },
  },
};

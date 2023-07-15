import NextAuth, { AuthOptions } from 'next-auth';
import LineProvider from 'next-auth/providers/line';
import { SupabaseAdapter } from '@next-auth/supabase-adapter';

const options: AuthOptions = {
  providers: [
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID ?? '',
      clientSecret: process.env.LINE_CLIENT_SECRET ?? '',
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
  }),
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };

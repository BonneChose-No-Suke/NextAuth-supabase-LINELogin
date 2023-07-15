'use client';

import { signIn } from 'next-auth/react';
import { FC } from 'react';

export const LoginButton: FC = () => (
  <button onClick={() => signIn('line')} className='border border-black'>
    LINEでログイン
  </button>
);

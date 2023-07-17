'use client';

import { signOut } from 'next-auth/react';
import { FC } from 'react';

export const SignOutButton: FC = () => {
  return (
    <button onClick={() => signOut()} className='border border-black'>
      ログアウト
    </button>
  );
};

export const runtime = 'edge';

const CheckoutConfirmation = () => {
  // Your component code
};

export default CheckoutConfirmation;
import Page, { getServerSideProps } from '@/src/pages/[channel]/checkout/confirmation/[code].page';
import { Redirect } from '@/src/lib/redirect';
import React from 'react';
import type { InferGetServerSidePropsType } from 'next';

export default (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return Redirect({ children: <Page {...props} /> })();
};

export { getServerSideProps };

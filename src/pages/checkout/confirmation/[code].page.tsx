// Specify that this route should use the Edge Runtime
export const runtime = 'edge';

// Import necessary modules
import Page, { getServerSideProps } from '@/src/pages/[channel]/checkout/confirmation/[code].page';
import { Redirect } from '@/src/lib/redirect';
import React from 'react';
import type { InferGetServerSidePropsType } from 'next';

// Define the CheckoutConfirmation component
const CheckoutConfirmation = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return Redirect({ children: <Page {...props} /> })();
};

// Export the component as the default export
export default CheckoutConfirmation;

// Export getServerSideProps for server-side rendering
export { getServerSideProps };

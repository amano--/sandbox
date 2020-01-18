/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

import SignUp from '../src/components/mui-samples/SignUp';
import SignIn from '../src/components/mui-samples/sign-in/SignIn';
import SignInSide from '../src/components/mui-samples/sign-in-side/SignInSide';
import Album from '../src/components/mui-samples/album/Album';
import Checkout from '../src/components/mui-samples/checkout/Checkout';
import Pricing from '../src/components/mui-samples/pricing/Pricing';
import StickyFooter from '../src/components/mui-samples/sticky-footer/StickyFooter';

export default {
  title: 'Material-UI Samples'
};

export const signUp = () => <SignUp />;
export const signIn = () => <SignIn />;
export const signInSide = () => <SignInSide />;
export const album = () => <Album />;
export const checkout = () => <Checkout />;
export const pricing = () => <Pricing />;
export const stickyFooter = () => <StickyFooter />;

import { memo } from 'react';

import Faq from './features/Faq';
import Features from './features/Features';
import Footer from './features/Footers';
import Hero from './features/Hero';
import Pricing from './features/Pricing';
import Layout from './layout.mobile';
import './style.css';

export default memo(() => (
  <Layout>
    <Hero />
    <Features />
    <Pricing />
    <Faq />
    <Footer />
  </Layout>
));

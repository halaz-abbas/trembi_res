import React from 'react';
import Hero from '../components/hero/Hero';
import WhyTermbi from '../components/why/Why';
import TrustedRestaurants from '../components/TrustedRestaurants/TrustedRestaurants';
import PricingPackages from '../components/pricingpackages/PricingPackages';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import styles from './Home.module.css';

export default function Home() {
  return (
    <main style={{ width: '100%', overflow: 'hidden' }}>
      <Hero />
      <WhyTermbi />
      <TrustedRestaurants />
      <PricingPackages />
      <FeaturesSection />
    </main>
  );
}
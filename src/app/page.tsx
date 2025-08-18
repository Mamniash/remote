import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import ScenariosSection from '@/components/ScenariosSection'
import GuaranteeSection from '@/components/GuaranteeSection'
import Footer from '@/components/Footer'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
	return (
		<main>
			<Header />
			<HeroSection />
                        <HowItWorksSection />
                        <WhyChooseSection />
                        <ScenariosSection />
                        <TestimonialsSection />
                        <GuaranteeSection />
                        <Footer />
		</main>
	)
}

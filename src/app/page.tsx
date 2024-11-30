import { EmblaCarousel } from '@/components/carousel/carousel.component';
import ExploreOurTopOpportunities from '@/components/ExploreOurTopOpportunities/ExploreOurTopOpportunities';
import Footer from '@/components/Footer/Footer';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import OurSuccessStories from '@/components/OurSuccessStories/OurSuccessStories';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';

import ImageTeamOuting1 from '~/images/team-outing-1.webp';
import ImageTeamOuting2 from '~/images/team-outing-2.webp';
import ImageTeamOuting3 from '~/images/team-outing-3.webp';
import ImageTeamOuting4 from '~/images/team-outing-4.webp';
export default function HomePage() {
  const sliderArray = [
    {
      imageUrl: ImageTeamOuting1,
      alt: 'Team Outing Image 1',
      overlayTitle: 'Your Future Awaits',
      overlaySubtitle: 'Join Us Today',
    },
    {
      imageUrl: ImageTeamOuting2,
      alt: 'Team Outing Image 2',
      overlayTitle: 'Unlock Potential',
      overlaySubtitle: 'Endless Opportunies',
    },
    {
      imageUrl: ImageTeamOuting3,
      alt: 'Team Outing Image 3',
      overlayTitle: 'Welcome',
      overlaySubtitle: 'Grow with us',
    },
    {
      imageUrl: ImageTeamOuting4,
      alt: 'Team Outing Image 4',
      overlayTitle: 'Empowering Success',
      overlaySubtitle: 'Together',
    },
  ];
  return (
    <main>
      <header className='h-12'>Header</header>
      <section>
        <EmblaCarousel slidesArray={sliderArray} />
        <ExploreOurTopOpportunities />
        <OurSuccessStories />
        <HowItWorks />
        <WhyChooseUs />
        <Footer />
      </section>
    </main>
  );
}

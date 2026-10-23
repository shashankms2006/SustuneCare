import React from 'react';
import { DualHero } from '../components/home/DualHero';
import { AnxietyMatrix } from '../components/home/AnxietyMatrix';
import { ServiceMatrix } from '../components/home/ServiceMatrix';
import { TcoEstimator } from '../components/home/TcoEstimator';
import { VideoShowcase } from '../components/home/VideoShowcase';
import { DiasporaTestimonials } from '../components/home/DiasporaTestimonials';
import { HubsMap } from '../components/home/HubsMap';

interface HomePageProps {
  onOpenConsultModal: (division?: string) => void;
  onOpenVideoModal: (videoSrc: string, title: string, subtitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenConsultModal,
  onOpenVideoModal,
}) => {
  return (
    <div>
      <DualHero
        onOpenConsultModal={onOpenConsultModal}
        onOpenVideoModal={onOpenVideoModal}
      />
      <AnxietyMatrix />
      <ServiceMatrix onOpenConsultModal={onOpenConsultModal} />
      <TcoEstimator onOpenConsultModal={onOpenConsultModal} />
      <VideoShowcase onOpenVideoModal={onOpenVideoModal} />
      <DiasporaTestimonials />
      <HubsMap onOpenConsultModal={onOpenConsultModal} />
    </div>
  );
};

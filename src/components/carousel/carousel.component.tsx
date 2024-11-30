'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { StaticImageData } from 'next/image';
import React from 'react';

import './carousel.style.css';

import NextImage from '@/components/NextImage';

type EmblaCarouselProps = {
  slidesArray: Array<{
    imageUrl: StaticImageData;
    alt: string;
    overlayTitle: string;
    overlaySubtitle: string;
  }>;
};
export function EmblaCarousel({ slidesArray }: EmblaCarouselProps) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>
        {slidesArray?.map((object, index) => {
          return (
            <div key={index} className='embla__slide'>
              <NextImage
                {...(index === 0 ? { priority: true } : {})}
                src={object.imageUrl}
                alt={object.alt}
                width={200}
                height={200}
                unoptimized
                quality={100}
              />
              <div className='image-container'>
                <div className='absolute bottom-0 p-4'>
                  <span className='text-white-50 font-bold block mt-auto text-lg'>
                    {object?.overlayTitle}
                  </span>
                  <span className='text-white-50 mt-auto text-xs'>
                    {object?.overlaySubtitle}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

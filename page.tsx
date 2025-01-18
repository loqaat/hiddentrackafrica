'use client';

import Image from 'next/image';
import { useState } from 'react';
import Logo from './assets/images/hiddenTrack-logo_white.png';

// importing Images
import step1Image from './assets/images/step1Image.webp';

export default function Home() {
  const [stepNumber, setStepNumber] = useState<number>(1);
  const [subStepNumber, setSubStepNumber] = useState<number>(1);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [subStepNumber1, setSubStepNumber1] = useState<string>('');
  const subStepsNumber1Data = [
    '0',
    '3 to 5 Days',
    '6 to 9 Days',
    'More than 10 Days',
    'I have exact Dates',
  ];
  const stepsData = [
    { step: 0, title: '', description: '' },
    {
      step: 1,
      title: 'How long do you want to travel for?',
      description: `Your African Adventure starts here. But first, we'd like to get to know you a bit better.
Answer the following quick questions, and our Travel Expert will be in touch
with you to start crafting your trip.`,
      image: step1Image,
    },
    { step: 2, title: 'Step 2', description: 'Description 2' },
    { step: 3, title: 'Step 3', description: 'Description 3' },
    { step: 4, title: 'Step 3', description: 'Description 3' },
    { step: 5, title: 'Step 3', description: 'Description 3' },
    { step: 6, title: 'Step 3', description: 'Description 3' },
    { step: 7, title: 'Step 3', description: 'Description 3' },
  ];

  return (
    <div className='form'>
      <div className='container'>
        <div className='content'>
          <div className='header'>
            <div className='logo'>
              <Image src={Logo} width={120} height={69} alt='Logo' />
            </div>
            <div className='stepBar'>
              <div
                className='progress'
                style={{ width: stepNumber * 14 + '%' }}
              ></div>
            </div>
            <div className='stepNumber'>
              Step {stepNumber} of {stepsData.length - 1}
            </div>
          </div>
          <div className='stepContent'>
            <div className='stepTitle'>{stepsData[stepNumber]?.title}</div>
            <div className='stepDescription'>
              {stepsData[stepNumber]?.description}
            </div>
            <div className='stepForm'>
              {stepNumber === 1 && subStepNumber === 1 ? (
                <div className='stepNumber1'>
                  <div className='substepNumber1'>
                    <div
                      className={`substepNumber1Item ${
                        subStepNumber1 === subStepsNumber1Data[1]
                          ? 'subStepNumber1ItemSelected'
                          : ''
                      }`}
                      onClick={() => setSubStepNumber1(subStepsNumber1Data[1])}
                    >
                      {subStepsNumber1Data[1]}
                    </div>
                    <div
                      className={`substepNumber1Item ${
                        subStepNumber1 === subStepsNumber1Data[2]
                          ? 'subStepNumber1ItemSelected'
                          : ''
                      }`}
                      onClick={() => setSubStepNumber1(subStepsNumber1Data[2])}
                    >
                      {subStepsNumber1Data[2]}
                    </div>
                    <div
                      className={`substepNumber1Item ${
                        subStepNumber1 === subStepsNumber1Data[3]
                          ? 'subStepNumber1ItemSelected'
                          : ''
                      }`}
                      onClick={() => setSubStepNumber1(subStepsNumber1Data[3])}
                    >
                      {subStepsNumber1Data[3]}
                    </div>
                    <div
                      className={`substepNumber1Item ${
                        subStepNumber1 === subStepsNumber1Data[4]
                          ? 'subStepNumber1ItemSelected'
                          : ''
                      }`}
                      onClick={() => setSubStepNumber1(subStepsNumber1Data[4])}
                    >
                      {subStepsNumber1Data[4]}
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        <div className='image'>
          <Image
            src={stepsData[stepNumber]?.image || Logo}
            width={1000}
            height={1000}
            alt='Image'
          ></Image>
        </div>
      </div>
    </div>
  );
}

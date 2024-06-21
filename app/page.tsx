import { useState } from 'react';
import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const Page = () => {
  const [inputText, setInputText] = useState('');

  const handleButtonClick = async () => {
    try {
      const response = await fetch(`${NEXT_PUBLIC_URL}/api/frame?id=1`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputText: inputText,
        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const frameMetadata = getFrameMetadata({
    buttons: [
      {
        label: 'Start',
      },
    ],
    image: {
      src: `${NEXT_PUBLIC_URL}/3.png`,
      aspectRatio: '1:1',
    },
    input: {
      text: 'write your name',
      onChange: (newText) => setInputText(newText), // Capture input text
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/frame?id=1`,
  });

  const metadata: Metadata = {
    title: 'zizzamia.xyz',
    description: 'LFG',
    openGraph: {
      title: 'zizzamia.xyz',
      description: 'LFG',
      images: [`${NEXT_PUBLIC_URL}/1.png`],
    },
    other: {
      ...frameMetadata,
    },
  };

  return (
    <>
      <h1>chicken.xyz</h1>
      {/* Render your component that generates the frame with metadata */}
    </>
  );
};

export default Page;

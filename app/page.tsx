import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

// Assuming 'text' is the imported method for handling text input
import { text } from 'stream/consumers';

// Function to handle the button click and send a POST request
const handleButtonClick = async () => {
  try {
    const response = await fetch(`${NEXT_PUBLIC_URL}/api/frame?id=1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputText: text, // Replace 'text' with the actual text input data
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

// Frame metadata with an onClick handler for the button
const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Start',
      onClick: handleButtonClick, // Add onClick handler to the button
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/3.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'write your name',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
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

export default function Page() {
  return (
    <>
      <h1>chicken.xyz</h1>
    </>
  );
}

'use client';
import { postMessage } from './api/postMessage'

export default function Home() {
  const handleClick = async () => {
    try {
      const explanation = await postMessage('What is the capital of France?');
      console.log('Explanation:', explanation);
    } catch (error) {
      console.error('Error fetching explanation:', error);
    }
  };

  return (
    <div>
      <h1>hello</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

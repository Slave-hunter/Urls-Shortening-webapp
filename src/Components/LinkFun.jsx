import React, { useState } from 'react';

function LinkFun() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUrlChange = (event) => {
    setOriginalUrl(event.target.value);
  };

  const handleShortenClick = async () => {
    try {
      setLoading(true);

      const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_BITLY_ACCESS_TOKEN', // Replace with your actual access token
        },
        body: JSON.stringify({
          long_url: originalUrl,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }

      const result = await response.json();
      setShortenedUrl(result.id);
      setError('');
    } catch (error) {
      setShortenedUrl('');
      setError('Failed to shorten URL. Please check your input and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full flex items-center justify-center bg-cyan-600 border-red-500'>
     
      <label>

        <input placeholder='Enter url' className='border-10 border-red-500 rounded bg-gray-100 p-5 m-5' type="text" value={originalUrl} onChange={handleUrlChange} />
      </label>
      <button className='rounded-full bg-yellow-300 p-3 m-3 w-30 font-bold' onClick={handleShortenClick} disabled={loading}>
        {loading ? 'Shortening...' : 'Shorten'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {shortenedUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default LinkFun;

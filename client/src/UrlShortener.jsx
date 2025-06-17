import React, { useState } from 'react'

const UrlShortener = () => {

    const [originalUrl, setOriginalUrl] = useState('');
    const [smallUrl, setSmallUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8000/api/shorten', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ originalUrl })
            })

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Something went wrong');

            setSmallUrl(data.shortUrl); 

        } catch (error) {
            console.error("Error shortening Url:", error)
        }
    }


    return (
        <div>
            <div>
                <h3>Url Shortener</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} placeholder='Enter the original Url to shorten' required />
                    <button type='submit'>Shorten Url</button>
                    {smallUrl && <p>Short Url: <a href={smallUrl}>{smallUrl}</a></p>}
                </form>
            </div>

        </div>
    )
}

export default UrlShortener


// import React, { useState } from 'react';

// const UrlShortener = () => {
//   const [originalUrl, setOriginalUrl] = useState('');
//   const [smallUrl, setSmallUrl] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // ❗ Prevent page reload
//     setError('');
//     try {
//       const res = await fetch('http://localhost:8000/api/shorten', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ originalUrl }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.error || 'Something went wrong');

//       setSmallUrl(data.shortUrl);
//       setOriginalUrl('');
//     } catch (err) {
//       console.error('Error shortening URL:', err.message);
//       setError(err.message);
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '3rem' }}>
//       <h3>🔗 URL Shortener</h3>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={originalUrl}
//           onChange={(e) => setOriginalUrl(e.target.value)}
//           placeholder="Enter the URL to shorten"
//           required
//           style={{ padding: '0.5rem', width: '60%' }}
//         />
//         <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
//           Shorten
//         </button>
//       </form>

//       {error && <p style={{ color: 'red' }}>⚠️ {error}</p>}

//       {smallUrl && (
//         <p style={{ marginTop: '1rem' }}>
//           ✅ Short URL: <a href={smallUrl} target="_blank" rel="noopener noreferrer">{smallUrl}</a>
//         </p>
//       )}
//     </div>
//   );
// };

// export default UrlShortener;

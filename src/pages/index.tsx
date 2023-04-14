import axios from 'axios';
import Head from 'next/head';
import React, { useRef, useState } from 'react';
import uploadImage from 'src/utils/uploadImage';

export default function Home() {
  const [file, setFile] = useState(null);
  
  return (
    <>
      <Head>
        <title>Image Upload</title>
      </Head>
      <div>
        <h1>Image Upload</h1>
        <div>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg, image/jpg"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <button
            type="button"
            onClick={async () => {
              const image = await uploadImage(file);
              await fetch(
                '/api/upload',
                {
                  method: 'POST',
                  body: JSON.stringify({
                    path: image,
                    name: file.name,
                  })
                }
              );
            }}
          >
            제출
          </button>
        </div>
      </div>
    </>
  );
};

'use client';

import { useParams } from 'next/navigation';

const page = () => {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <h2>Meat items: {id}</h2>
    </div>
  )
}

export default page

"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const page = () => {
  const params = useParams();
  const { id } = params;
  return (
    <>
      <div>
        <h2>Bottle items: {id}</h2>
      </div>

      <Link href="/products/bottles">Back to bottles</Link>
    </>
  );
};

export default page;

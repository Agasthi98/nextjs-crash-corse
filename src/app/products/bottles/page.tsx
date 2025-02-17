import React from "react";
import Link from "next/link";
const page = () => {
  const bottles = [
    {
        id:1,
        bottleName:'Gal',
    },
    {
        id:2,
        bottleName:'Vodka',
    },
    {
        id:3,
        bottleName:'Whiskey',
    },
    {
        id:4,
        bottleName:'Rum',
    },
  ]

  return (
    <>
      <div>Bottle page</div>
      <ul>
       {bottles.map((bottle) => {
        return(
          <li><Link href={`/products/bottles/${bottle.bottleName}`}>{bottle.bottleName}</Link></li>
        )
       })}
      </ul>
    </>
  );
};

export default page;

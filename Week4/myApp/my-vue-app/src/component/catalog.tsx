import React from 'react'

export default function catalog() {
    const catalog = ["electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];
  const hanadleSelect = (selectedCategory : string) =>
  return (
    <div>
 <CatalogDisplay
 catalog={catalog}
 onSelect={handleSelect}
 selected="electronics/>
    </div>
  )
}

import { universities } from "./universities";


export const universityLogos = universities.map(
  (university, index) => ({

    id: university.id,

    slug: university.slug,

    name: university.name,

    image: university.logo,


    // Large cards pattern
    large:[
      0,
      5,
      10,
      15,
      20
    ].includes(index)

  })
);
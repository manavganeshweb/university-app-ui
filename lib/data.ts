
export type Program = { title: string; category: 'Postgraduate' | 'Undergraduate' | 'Diploma' | 'Certificate' | 'Executive' | 'Doctorate'; image: string; badge?: string; duration: string; specialisations: string }

const image = (path: string, width = 768, quality = 85) => `https://www.collegesathi.com/_next/image?url=${encodeURIComponent(`https://media.collegesathi.com/${path}`)}&w=${width}&q=${quality}`

export const asset = image
export const partners = ['1781158352736-nmims-cdoe.webp','1781158458965-amity-online-university.webp','1781158542372-manipal-university-online.webp','1781158624029-dr-dy-patil-vidyapeeth-pune.webp','1781158719672-chandigarh-university-online.webp','1781158764432-sikkim-manipal-university.webp','1781158841358-imt-cdl.webp','1781158915926-lovely-professional-university.webp','1781159003084-vivekananda-global-university.webp','1781159056608-shoolini-university.webp','1781159114288-mit-pune.webp','1781159168728-parul-university-online.webp']

export const programs: Program[] = [
  { title:'Online MBA', category:'Postgraduate', image:'1772175408378-Online_MBA_(1).svg', badge:'#1 Choice', duration:'24 months', specialisations:'35+ specialisations' },
  { title:'Online MCA', category:'Postgraduate', image:'1771917630109-Online_MCA.svg', duration:'2 years', specialisations:'25+ specialisations' },
  { title:'Online M.Tech', category:'Postgraduate', image:'1771917703905-Online_M.Tech.svg', duration:'2 years', specialisations:'14+ specialisations' },
  { title:'1-year Online MBA', category:'Postgraduate', image:'1771917667876-1-year_MBA_(1).svg', duration:'1 year', specialisations:'7+ specialisations' },
  { title:'Dual MBA', category:'Postgraduate', image:'1772175444834-Dual_MBA_(2).svg', badge:'Popular', duration:'2 years', specialisations:'35+ specialisations' },
  { title:'Online MAJMC', category:'Postgraduate', image:'1770097776649-MAJMC.svg', duration:'2 years', specialisations:'8+ specialisations' },
  { title:'Online BBA', category:'Undergraduate', image:'1772175408378-Online_MBA_(1).svg', duration:'3 years', specialisations:'20+ specialisations' },
  { title:'Online BCA', category:'Undergraduate', image:'1771917630109-Online_MCA.svg', duration:'3 years', specialisations:'15+ specialisations' },
]

export const benefits = [
  ['100% online, zero travel','1775109991568-100onlinezerotravel.webp'], ['Live & recorded lectures','1775110395607-liverecordedlectures.webp'], ['Learn on your schedule','1775111108933-weekdayorweekendslearning.webp'], ['World-class degree, smarter spend','1775110847335-smartspendworldclassdegree.webp'], ['Access top institutions','1775110095802-accesstotopinstitutions.webp'], ['Keep your job, build your degree','1775110371923-keepyourjobboostyourdegree.webp'], ['Network from anywhere','1775110420054-networkinganywhereeverywhere.webp'], ['Real value for your career','1775110257236-brandvaluewithrealvalue.webp'],
]

export const trending = [
  { title:'Online MBA', duration:'24 months', specialisations:'35+ cutting-edge specialisations', image:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85' },
  { title:'Online MCA', duration:'2 years', specialisations:'25+ cutting-edge specialisations', image:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85' },
  { title:'Online BBA', duration:'3 years', specialisations:'20+ cutting-edge specialisations', image:'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85' },
  { title:'Online BCA', duration:'3 years', specialisations:'15+ cutting-edge specialisations', image:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=85' },
]

export const testimonials = [
  { name:'Varun Kumar', role:'Deputy General Manager (DGM)', quote:'I was confused about choosing the right online MBA university, but the counsellor guided me clearly. The admission process was smooth and hassle-free.' },
  { name:'Deepanshu Gupta', role:'Senior Associate — US Taxation', quote:'They understood my career goals and suggested options without pushing any university. It was clear, honest guidance.' },
  { name:'Shruti Late', role:'HR & Executive Assistant', quote:'I had many doubts about online degrees, but everything was explained simply. That gave me the confidence to move forward.' },
]

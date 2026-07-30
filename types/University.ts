export interface Course{
    id:number
    name:string
    duration:string
    fees:string
    mode:string
}

export interface University{

    id:number

    slug:string

    name:string

    logo:string

    banner:string

    location:string

    rating:number

    ranking:string

    established:number

    approvals:string[]

    description:string

    placements:string

    highestPackage:string

    averagePackage:string

    students:number

    website:string

    gallery:string[]

    courses:Course[]
}
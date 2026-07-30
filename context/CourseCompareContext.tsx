"use client";

import {
createContext,
useContext,
useState
} from "react";


export type CompareItem = {

slug:string;

name:string;

title?:string;

type:
"course"
|
"university"
|
"college";


image?:string;

category?:string;

duration?:string;

fees?:string;

mode?:string;

eligibility?:string;

description?:string;


[key:string]:any;

}




interface ContextType {

selectedItems:CompareItem[];

addItem:(item:CompareItem)=>void;

removeItem:(slug:string)=>void;

clearCompare:()=>void;

isSelected:(slug:string)=>boolean;

}



const CompareContext =
createContext<ContextType | null>(null);



export function CompareProvider({
children
}:{
children:React.ReactNode
}){


const [selectedItems,setSelectedItems]=
useState<CompareItem[]>([]);



const addItem=(item:CompareItem)=>{


setSelectedItems(prev=>{


const exists =
prev.some(
x=>x.slug===item.slug
);



if(exists)
return prev;



if(prev.length>=4)
return prev;



return [
...prev,
item
];


})


}




const removeItem=(slug:string)=>{


setSelectedItems(prev=>
prev.filter(
item=>item.slug!==slug
)
)


}



const clearCompare=()=>{

setSelectedItems([]);

}




const isSelected=(slug:string)=>{


return selectedItems.some(
item=>item.slug===slug
)

}




return (

<CompareContext.Provider

value={{

selectedItems,

addItem,

removeItem,

clearCompare,

isSelected

}}

>


{children}


</CompareContext.Provider>

)

}



export function useCompare(){


const context =
useContext(CompareContext);



if(!context){

throw new Error(
"useCompare must be inside CompareProvider"
)

}


return context;

}
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import saleParts from "@/lib/services_data/SaleParts";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function SaleParts() {

const [currentIndex,setCurrentIndex] = useState(0);
const [itemsPerView,setItemsPerView] = useState(4);



useEffect(()=>{

const handleResize=()=>{

if(window.innerWidth < 768){
setItemsPerView(1);
}else{
setItemsPerView(4);
}

};

handleResize();

window.addEventListener(
"resize",
handleResize
);

return ()=>{
window.removeEventListener(
"resize",
handleResize
)
}

},[]);



const nextSlide=()=>{

if(
currentIndex <
saleParts.length - itemsPerView
){
setCurrentIndex(
prev=>prev+1
);
}

};



const prevSlide=()=>{

if(currentIndex > 0){
setCurrentIndex(
prev=>prev-1
);
}

};



const cardWidth = 280; 
const translateValue =
currentIndex * cardWidth;



return(

<section className="bg-gray-100 py-16 overflow-hidden">

<h2 className="text-center text-3xl font-bold mb-12">
TOP PARTS FOR SALE
</h2>



<div className="flex items-center justify-center gap-6">

{/* LEFT BUTTON */}
{currentIndex > 0 && (

<button
onClick={prevSlide}
className="
w-12
h-12
rounded-full
bg-[#088751]
text-white
flex
items-center
justify-center
shadow
"
>
<ArrowBackIosNewIcon />
</button>

)}



{/* SLIDER WINDOW */}
<div
className="
overflow-hidden
w-[280px]
md:w-[1120px]
"
>

{/* TRACK */}
<div
className="
flex
gap-6
transition-transform
duration-500
ease-in-out

"
style={{
transform:
`translateX(-${translateValue}px)`
}}
>

{saleParts.map((part)=>(

<div
key={part.id}
className="
min-w-[256px]
bg-white
border
border-[#059669]
rounded-lg
shadow-md
p-5
"
>

<div className="flex justify-center ">
<Image
src={part.image}
alt={part.name}
width={180}
height={140}
/>
</div>


<h3 className="font-bold mt-5">
{part.name}
</h3>

<p className="text-sm text-gray-500 mt-2">
{part.text}
</p>

<p className="text-3xl font-bold text-[#088D50] mt-4">
{part.price}
</p>

</div>

))}

</div>

</div>



{/* RIGHT BUTTON */}
{
currentIndex <
saleParts.length - itemsPerView && (

<button
onClick={nextSlide}
className="
w-12
h-12
rounded-full
bg-[#088751]
text-white
flex
items-center
justify-center
shadow
"
>
<ArrowForwardIosIcon />
</button>

)
}

</div>



<button
className="
block
mx-auto
mt-10
bg-[#088751]
text-white
px-12
py-3
rounded
"
>
Find More
</button>


</section>

)

}
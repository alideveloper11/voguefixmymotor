"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import top_makes_data from "@/lib/Top_makes_data";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Topmakes() {

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
top_makes_data.length - itemsPerView
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
Top Makes We Work On
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
hover:bg-green-800
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

{top_makes_data.map((part)=>(

<div
key={part.id}
className="
min-w-[256px]
bg-white

rounded-lg
p-5
"
style={{boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)"}}
>

<div className="flex justify-center ">
<Image
src={part.image}
alt="top makes image"
width={180}
height={140}
/>
</div>




</div>

))}

</div>

</div>



{/* RIGHT BUTTON */}
{
currentIndex <
top_makes_data.length - itemsPerView && (

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
hover:bg-green-800
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
hover:bg-green-800
"
>
Find More
</button>


</section>

)

}
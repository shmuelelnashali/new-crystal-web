'use client'
import Image from "next/image";

export default function Home() {
  return (
    
    function DragComponent() {

function handleDrag(e) {
    console.log("X: " + e.clientX + " | Y: " + e.clientY)
}

return (
    <div  draggable onDrag={handleDrag} className="h-full  fixed right-48">
        Hello World
    </div>
)
}


  )}

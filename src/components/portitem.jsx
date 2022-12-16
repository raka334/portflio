import React from "react";
function Portit({title,imgUrl,stack,link}){
    return(
    <div className="border-2 border-l-stone-900 rounded-md overflow-hidden"><img 
    src={imgUrl}
    alt="portfolio"
    className="object-cover w-full cursor-pointer h-36 md:h-48"
    />
    <div className="w-full p-4">
        <h3 className="mb-2 text-lg font-semibold md:text-xl md:mb-3">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs">{stack.map(item =>(
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">{item}</span>
        ))}
        </p>
    </div>

    </div>
    
    )
}
export default Portit;
import React from "react";
function Portit({title,imgUrl,stack,link}){
    return(
    <div><img 
    src={imgUrl}
    alt="portfolio"
    className="object-cover w-full cursor-pointer h-36 md:h-48"
    />
    <div className="w-full p-4">
        <h3 className="mb-2 text-lg font-semibold md:text-xl md:mb-3">{title}</h3>
        <p>{stack.map(item =>(
            <span>{item}</span>
        ))}
        </p>
    </div>

    </div>
    
    )
}
export default Portit;
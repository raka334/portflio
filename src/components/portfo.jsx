import React from "react";
import portfoli from "../data/portfoli";
import Portit from "./portitem";

function Port(){
    return(
        <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {portfoli.map(project=>(
                    <Portit
                    imgUrl={project.imgUrl}
                    title={project.title}
                    stack={project.stack}
                    link={project.link}
                    
                    />

                ))}
            </div>

        </div>
    )

}
 export default Port;
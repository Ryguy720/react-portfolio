import React,{useEffect, useState} from "react";
import jsonlist from "./Project.json";
import Project from "../components/Project.js";

function Portfolio() {
    const [projectlist,setProjectList] = useState([])
    useEffect(()=>{
        setProjectList(jsonlist)
    },[])
    return (<main class="d-flex align-content-between flex-wrap justi" id="portfolio">
        {projectlist.map((app,key) => {
            return <Project app ={app.app}
            description ={app.description}
            github={app.github}
            live={app.live}
            screenshot={app.screenshot}
            key={key} />
        })}
       </main>
    )
}

export default Portfolio;
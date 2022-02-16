import React,{useEffect, useState} from "react";
import jsonlist from "./Project.json";
import Project from "../components/Project.js";
import { Container } from "react-bootstrap";
import '../App.css';

function Portfolio() {
    const [projectlist,setProjectList] = useState([])
    useEffect(()=>{
        setProjectList(jsonlist)
    },[])
    return (
        <Container>
    <div className="cards text-white" id="portfolio">
        {projectlist.map((app,key) => {
            return <Project app ={app.app}
            description ={app.description}
            github={app.github}
            live={app.live}
            screenshot={app.screenshot}
            key={key} />
        })}
      </div>
       </Container>
    )
}

export default Portfolio;
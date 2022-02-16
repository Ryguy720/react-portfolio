import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";




const Footer = () => {
    return (

        <div className = "footer">
            <Navbar className="d-flex justify-content-center" fixed="bottom" variant="dark">
                <Navbar.Brand href="/">
                    
                        <a className = "p-5 m-5" href="https://github.com/Ryguy720" >Github</a>
                        <a className = "p-5 m-5" href="https://www.linkedin.com/in/ryan-mcculloch-014022224/" >Linkedin</a>
                
                </Navbar.Brand>



            </Navbar>
        </div>


       // <footer>
        //     <div class="container">
        //         <div class="row">
        //             <div class="col-lg-4 col-md-6">
        //                 <h3>The Footer</h3>
        //                 <ul class="list-unstyled three-column">
        //                     <li href = "https://github.com/Ryguy720" >Github</li>
        //                     <li>Linkdin</li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
    )

}

export default Footer

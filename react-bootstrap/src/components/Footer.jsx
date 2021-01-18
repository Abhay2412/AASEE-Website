import React from 'react'
import './Footer.css';

const Footer = () => {
    return(
        <div class="main-footer">
            <div class ="container">
                <div class="row">
                    {/* Logo Coulmn */}
               <div class = "col">
                 <img class="img-fluid" src="/assets/AASEE Logo.png" width="100%"></img>
               </div>
               {/* Coulmn1 */}
               <div class = "col">
                   <h5>OFFICE LOCATION</h5>
                   <ul class="list-unstyled">
                    <li>Room # ENA 229L</li>
                    <li>Schulich School of Engineering</li>
                    <li>University of Calgary</li>
                   </ul>
               </div>
               {/* Coulmn2 */}
               <div class = "col">
                   <h5>Content</h5>
                   <ul class="list-unstyled">
                    <li><a href="/">HOME</a></li>
                    <li> <a href="/what_we_do">WHAT WE DO</a></li>
                    <li> <a href="/get_involved">GET INVOLVED</a></li>
                    <li> <a href="/about">ABOUT</a></li>
                    <li> <a href="/contact">CONTACT</a></li>
                    <li> <a href="/donate">DONATE</a></li>
                   </ul>
               </div>
                {/* Coulmn3 */}
                <div class = "col">
                   <h5>Connect With Us</h5>
                   <ul class="list-unstyled">
                    <li><a href="https://www.linkedin.com/company/aasee-association-for-the-advancement-of-science-and-engineering-education-/"><img src="./assets/Linkedln Icon Flat.png" class="pb-1 size-2 img-fluid fa" width="20%"></img></a></li>
                    <li> <a href="https://www.facebook.com/v2.8/plugins/error/confirm/like?iframe_referer=https%3A%2F%2Faasee.ca%2F&kid_directed_site=false&secure=true&plugin=like&return_params=%7B%22action%22%3A%22like%22%2C%22app_id%22%3A%221411937785535776%22%2C%22channel%22%3A%22https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df129fad517940d%26domain%3Daasee.ca%26origin%3Dhttps%253A%252F%252Faasee.ca%252Ff28a8d05d1b70c%26relation%3Dparent.parent%22%2C%22container_width%22%3A%220%22%2C%22href%22%3A%22https%3A%2F%2Fwww.facebook.com%2FAASEE-576623595718823%2F%22%2C%22layout%22%3A%22button_count%22%2C%22locale%22%3A%22en_US%22%2C%22sdk%22%3A%22joey%22%2C%22share%22%3A%22false%22%2C%22show_faces%22%3A%22true%22%2C%22size%22%3A%22small%22%2C%22_rdc%22%3A%221%22%2C%22_rdr%22%3Anull%2C%22ret%22%3A%22sentry%22%2C%22act%22%3A%22like%22%7D"><img src="./assets/Facebook Icon Flat.png" class="pb-1 size-2 img-fluid fa" width="20%"></img></a></li>
                    <li> <a href="https://twitter.com/harsh_s7"><img src="./assets/Twitter Icon Flat.png" class="pb-1 size-2 img-fluid fa" width="20%"></img></a></li>
                    <li> <a href="mailto:aaseeproject@gmail.com"><img src="./assets/Mail Logo Flat.png" class="pb-1 size-2 img-fluid fa" width="20%"></img></a></li>
                   </ul>
               </div>
               <hr/>
                </div>
                <div class="row">
                <p class="col-sm">
                  Copyright  &copy;{new Date().getFullYear()}  AASEE | Privacy Policy | Registered Charity # 1234567890
                </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
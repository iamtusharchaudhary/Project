import React from "react";

function Demo() {
    return (
        <>
            <div className="navbar">
                <h1>&nbsp;&nbsp;Tushar tech</h1>
                <ul>
                    <li><a href="./home">Home</a></li>
                    <li><a href="service">Service</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li><a href="about">About Us</a></li>
                </ul>
            </div>
            <div className="banner">
                <img src="https://wallpapers.com/images/hd/4k-tech-105e3a4x7aw7coqd.jpg" alt="banner" width="90%" height="340px" />
            </div>
            <h4 id="tert">About Us</h4>
            <h3 id="tata">learn more <span style={{ color: "red" }}>about us</span></h3>
            <br />
            <br />
            <div className="mid-section">
                <div className="left">
                    <img src="https://c4.wallpaperflare.com/wallpaper/624/21/247/microsoft-windows-windows-10-technology-hi-tech-wallpaper-preview.jpg" alt="banner" width="100%" height="220px" />
                </div>
                <div className="right">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea fuga officia nostrum reiciendis perspiciatis molestias magnam corrupti nobis esse deserunt repellat, corporis ullam aliquam perferendis.</p>
                </div>
            </div>
            <div className="footer">
                <h4>copyright &copy; 2024-25</h4>
            </div>
        </>
    )
}
export default Demo

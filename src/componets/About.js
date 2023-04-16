import React, { useState } from 'react'

export default function About(prop) {
    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"

    // }

    // );
    let myStyle ={
        color: prop.mode=== "dark" ? "white": "black",
    backgroundColor: prop.mode=== "dark" ? "#2c4178": "white"

    }
    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // const toggleText = () => {
    //     if (myStyle.color === "white") {
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else {
    //         setBtnText("Enable light Mode")
    //     }
    // }
    // const handleOnClick = (event) => {
    //     if (myStyle.color === "white") {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"

    //         })
    //         toggleText();
    //     }
    //     else {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "2px solid white"
    //         })
    //         toggleText();

    //     }

    // }

    return (
        <>
            <div className="container my-4" style={myStyle}>
                <h1>About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample" style={myStyle}>
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            

            </div>

        </>
    )
}

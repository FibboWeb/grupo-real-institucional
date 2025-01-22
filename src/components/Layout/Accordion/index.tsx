"use client"
import React, { useState } from "react";

export enum FaqHeading {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    H6 = "h6"
}

function Accordion({ title, faqHeading = FaqHeading.H2, children }: { title: string; faqHeading?: FaqHeading; children: React.ReactNode }) {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    return (
        <div
            style={{
                width: "100%",
                marginBottom: "15px",
                lineHeight: "15px",
                border: "1px solid rgba(209, 213, 219, 0.5)"
            }}
        >
            <button
                style={{
                    width: "100%",
                    position: "relative",
                    textAlign: "left",
                    padding: "4px",
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    cursor: "pointer"
                }}
                onClick={toggle}
                type="button"
            >
                {React.createElement(faqHeading, null, title)}
            </button>
            <div
                style={{ display: isShowing ? "block" : "none", padding: "5px" }}
            >
                {children}
            </div>
        </div>
    );
}

export default Accordion;


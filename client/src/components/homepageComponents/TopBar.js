import React from "react";
function TopBar() {
    return(
        <>
            <section id="topBar">
                <div id="topBarTitle">
                    Speculate
                </div>
                <div id="topBarButtons">
                    <div id="otherLinks">
                        <div className="otherLinks" id="authors">
                            Our co-authors
                        </div>
                        <div className="otherLinks" id="whoAreWe">
                            Who are we?
                        </div>
                    </div>
                    <div id="getStarted">
                        Get Started
                    </div>
                </div>
            </section>
        </>
    );
}
export default TopBar;

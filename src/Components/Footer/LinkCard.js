import React from "react"
import Links from "./Link"
import "./LinkCard.css";
function LinkCard() {
	return (
		// <div className="Links">
		// 	<div className="column">
		// 		{Links.map((LinkItem) => (
		// 			<a className="link_"href={LinkItem.link}>{LinkItem.Name}</a>
		// 		))}
		// 	</div>
            // </div>
            <div className="LinkCard">
                        {Links.map((LinkItem)=>(
                              <div className="Links">
                                    <div className="column">
                                          <a href={LinkItem.link}>{LinkItem.Name}</a>
                                    </div>
                              </div>
                        ))}
            </div>
	)
}

export default LinkCard

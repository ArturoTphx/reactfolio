import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./genius.png"
								alt="genius"
								className="work-image"
							/>
							<div className="work-title">
								Genius Tutoring Group
							</div>
							<div className="work-subtitle">Project Manager</div>
							<div className="work-duration">
								JAN 2023 - TO DATE
							</div>
						</div>
						<div className="work">
							<img
								src="./mora.jpg"
								alt="mora"
								className="work-image"
							/>
							<div className="work-title">
								Municipalidad de Mora
							</div>
							<div className="work-subtitle">
								Full-Stack Developer
							</div>
							<div className="work-duration">
								FEB 2022 - JUN 2023
							</div>
						</div>
						<div className="work">
							<img
								src="./genius.png"
								alt="genius"
								className="work-image"
							/>
							<div className="work-title">
								Genius Tutoring Group
							</div>
							<div className="work-subtitle">
								Mobile Developer
							</div>
							<div className="work-duration">
								APR 2022 - DEC 2022
							</div>
						</div>
						<div className="work">
							<img
								src="./genius.png"
								alt="genius"
								className="work-image"
							/>
							<div className="work-title">
								Genius Tutoring Group
							</div>
							<div className="work-subtitle">
								Full-Stack Developer
							</div>
							<div className="work-duration">
								JUN 2021 - MAR 2022
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

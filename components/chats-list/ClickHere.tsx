import React, { useEffect, useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

type Props = {};

function ClickHere({}: Props) {
	return (
		<div className="absolute right-20 rotate-0 z-50">
			<Player
				autoplay
				loop				
				src="./arrow.json"
				style={{ height: "120px", width: "120px" }}
			>
				<Controls visible={false} />
			</Player>
		</div>
	);
}

export default ClickHere;

import React, { useEffect, useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

type Props = {};

function ClickHere({}: Props) {
	return (
		<div className="absolute right-20 top-60 z-50">
			<Player
				autoplay
				loop
				src="./click-here.json"
				style={{ height: "80px", width: "80px" }}
			>
				<Controls visible={false} />
			</Player>
		</div>
	);
}

export default ClickHere;

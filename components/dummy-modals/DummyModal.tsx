import React from "react";
import MotionDrawer from "../global/MotionDrawer";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

type Props = {
	message: string;
	show: boolean;
	setShow: any;
};

function DummyModal({ message, show, setShow }: Props) {
	return (
		<MotionDrawer show={show} setShow={setShow}>
			<div className="px-6 py-20">
				<p className="text-lg font-gray-900 font-bold text-center">
					Oops! The bride's brother didn't have time to build this feature!
				</p>
				<Player
					autoplay
                    loop
					src="./oops.json"
					style={{ height: "200px", width: "200px" }}
				>
					<Controls visible={false} />
				</Player>
				<p className="text-gray-400 font-normal text-center text-xs">
					{message}
				</p>
			</div>
		</MotionDrawer>
	);
}

export default DummyModal;

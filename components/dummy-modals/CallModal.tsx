import React from "react";
import IndividualAvatar from "../global/IndividualAvatar";
import MotionDrawer from "../global/MotionDrawer";

type Props = {
	show: boolean;
	setShow: any;
};

function CallModal({ show, setShow }: Props) {
	return (
		<MotionDrawer show={show} setShow={setShow}>
			<div className="px-6 py-20">
				<p className="text-lg font-gray-900 font-bold text-center">
					You can get in touch with either of us on WhatsApp using the buttons
					below!
				</p>
				<div className="flex justify-around items-center gap-2 my-10 mx-auto w-full">
					<div onClick={() => window.open("https://wa.me/919810370408")}>
						<IndividualAvatar
							width="w-20"
							height="h-20"
							hideOnlineIndicator
							src="/img/sanjana.jpeg"
						/>
					</div>
					<div onClick={() => window.open("https://wa.me/919818393434")}>
						<IndividualAvatar
							width="w-20"
							height="h-20"
							hideOnlineIndicator
							src="/img/arjun.jpeg"
						/>
					</div>
				</div>
				<p className="text-gray-100 font-normal text-center text-xxs">
					The bride's clearly brother took the easy way out here too but hey
					hope it does the trick!
				</p>
			</div>
		</MotionDrawer>
	);
}

export default CallModal;

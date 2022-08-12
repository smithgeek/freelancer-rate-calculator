import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import React, { useEffect, useRef } from "react";
import ReactModal from "react-modal";

interface DialogProps {
	showCloseButton?: boolean;
	children: React.ReactNode;
	isOpen: boolean;
	onRequestClose?: () => void;
	contentStyle?: React.CSSProperties;
}
export function Dialog({ children, isOpen, onRequestClose, showCloseButton, contentStyle }: DialogProps) {
	const ref = useRef(null);

	const onOpen = () => {
		if (ref.current) {
			disableBodyScroll(ref.current);
		}
	}
	const onClose = () => {
		if (ref.current) {
			enableBodyScroll(ref.current);
		}
	}
	useEffect(() => {
		const currentRef = ref.current;
		return () => {
			if (currentRef) {
				enableBodyScroll(currentRef)
			}
		}
	}, [ref])
	return <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} className="modal-box relative" style={{ content: contentStyle }} overlayClassName='modal-overlay' ref={ref}
		onAfterClose={onClose} onAfterOpen={onOpen}>
		{showCloseButton && <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={onRequestClose}>✕</button>}
		{children}
	</ReactModal>
}
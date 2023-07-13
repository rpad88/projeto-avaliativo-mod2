import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import { Modal } from 'react-bootstrap'

export default function ModalComponent({ children }) {
	const { show, setShow, data, setData } = useContext(ModalContext)

	const handleClose = () => {
		setShow(false)
		setData({})
	}

	return (
		<Modal
			show={show}
            
			onEscapeKeyDown={handleClose}
            onHide={handleClose}
			centered
            style={{backgroundColor: "rgba(0,0,0, 0.3)"}}
		>
            <Modal.Body>
                <h1>teste</h1>
				
            </Modal.Body>
		</Modal>
	)
}

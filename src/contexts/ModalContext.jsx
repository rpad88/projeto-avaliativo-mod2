import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ModalContext = createContext({
	show: false,
	setShow: () => {},
	data: {},
	setData: () => {},
})

export const ModalProvider = ({ children }) => {
	const [show, setShow] = useState(false)
	const [data, setData] = useState({})

	return (
		<ModalContext.Provider value={{show, setShow, data, setData}}>
			{children}
		</ModalContext.Provider>
	)
}

ModalProvider.propTypes = {
	children: PropTypes.node
}
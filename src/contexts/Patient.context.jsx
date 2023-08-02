import { createContext, useState } from "react";


export const PatientContext = createContext({
    patient: {},
    setPatient: () => {},
    consult: '',
    setConsult: () => {},
    exam: '',
    setExam: () => {},
})

export const PatientProvider = ({children}) => {
    const [patient, setPatient] = useState(null)
    const [consult, setConsult] = useState(null)
    const [exam, setExam] = useState(null)

    return (
        <PatientContext.Provider value={{patient, setPatient, consult, setConsult, exam, setExam}}>
            {children}
        </PatientContext.Provider>
    )
}
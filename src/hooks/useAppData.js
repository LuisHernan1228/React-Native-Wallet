import { useContext, } from 'react'
import AppContext from '../store/context/AppContext'

const useAppData = () => useContext(AppContext)

export default useAppData

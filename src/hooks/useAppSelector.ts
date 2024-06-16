import { useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import { RootState } from '@redux/types'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector

import { useReducer, useEffect } from "react"
import axios from "axios"

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const headers = {
    // 'Host': 'data.usajobs.gov',
    // 'User-Agent': 'j499412@gmail.com',
    'Authorization-Key': 'r0RTfgwAkP9bmXyhq5k/oT/VMYXAfQojv0f4eTzkir4='
};

// const API_KEY = "r0RTfgwAkP9bmXyhq5k/oT/VMYXAfQojv0f4eTzkir4="
const BASE_URL = "https://data.usajobs.gov/api/Search?JobCategoryCode=1550" 

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, jobs: [] }
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, jobs: action.payload.jobs }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, jobs: [] }
        default:
            return state
    }
}

export default function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        dispatch({ type: ACTIONS.MAKE_REQUEST })
        axios.get(BASE_URL, { headers }, {
            cancelToken: cancelToken.token,
            params: { page: page, ...params }
        }).then(res => {
            dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data.SearchResult.SearchResultItems } })
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch({ type: ACTIONS.ERROR, payload: { error: e } })
        })

        return () => {
            cancelToken.cancel()
        }
    }, [params, page])

    return state
}
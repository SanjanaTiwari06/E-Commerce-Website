import { takeEvery, put } from "redux-saga/effects"
import { CREATE_BRAND, CREATE_BRAND_RED, DELETE_BRAND, DELETE_BRAND_RED, GET_BRAND, GET_BRAND_RED, UPDATE_BRAND, UPDATE_BRAND_RED } from "../Constant"
import { CreateRecord , GetRecord, UpdateRecord , DeleteRecord} from "./Services/index"

function* CreateSaga(action){                                     //WorkerSaga
    let response = yield CreateRecord("brand",action.payload)
        yield put({type: CREATE_BRAND_RED, payload: response})
    
}
function* GetSaga(){                                     //WorkerSaga
    let response = yield GetRecord("brand")
        yield put({type: GET_BRAND_RED, payload: response})
    
}

function* UpdateSaga(action){                                     //WorkerSaga
        yield UpdateRecord("brand",action.payload)
        yield put({type: UPDATE_BRAND_RED, payload: action.payload})
    
}

function* DeleteSaga(action){                                     //WorkerSaga
        yield DeleteRecord("brand",action.payload)
        yield put({type: DELETE_BRAND_RED, payload: action.payload})
    
}
export default function* BrandSaga(){                  //WatcherSaga
    yield takeEvery(CREATE_BRAND,CreateSaga)
    yield takeEvery(GET_BRAND,GetSaga)
    yield takeEvery(UPDATE_BRAND,UpdateSaga)
    yield takeEvery(DELETE_BRAND,DeleteSaga)
}
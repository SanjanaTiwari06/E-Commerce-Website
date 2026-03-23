import { takeEvery, put } from "redux-saga/effects"
import { CREATE_PRODUCT, CREATE_PRODUCT_RED, DELETE_PRODUCT, DELETE_PRODUCT_RED, GET_PRODUCT, GET_PRODUCT_RED, UPDATE_PRODUCT, UPDATE_PRODUCT_RED } from "../Constant"
import { CreateRecord , GetRecord, UpdateRecord , DeleteRecord} from "./Services/index"

function* CreateSaga(action){                                     //WorkerSaga
    let response = yield CreateRecord("product",action.payload)
        yield put({type: CREATE_PRODUCT_RED, payload: response})
    
}
function* GetSaga(){                                     //WorkerSaga
    let response = yield GetRecord("product")
        yield put({type: GET_PRODUCT_RED, payload: response})
    
}

function* UpdateSaga(action){                                     //WorkerSaga
        yield UpdateRecord("product",action.payload)
        yield put({type: UPDATE_PRODUCT_RED, payload: action.payload})
    
}

function* DeleteSaga(action){                                     //WorkerSaga
        yield DeleteRecord("product",action.payload)
        yield put({type: DELETE_PRODUCT_RED, payload: action.payload})
    
}
export default function* ProductSaga(){                  //WatcherSaga
    yield takeEvery(CREATE_PRODUCT,CreateSaga)
    yield takeEvery(GET_PRODUCT,GetSaga)
    yield takeEvery(UPDATE_PRODUCT,UpdateSaga)
    yield takeEvery(DELETE_PRODUCT,DeleteSaga)
}
import { takeEvery, put } from "redux-saga/effects"
import { CREATE_SUBCATAGORY, CREATE_SUBCATAGORY_RED, DELETE_SUBCATAGORY, DELETE_SUBCATAGORY_RED, GET_SUBCATAGORY, GET_SUBCATAGORY_RED, UPDATE_SUBCATAGORY, UPDATE_SUBCATAGORY_RED } from "../Constant"
import { CreateRecord , GetRecord, UpdateRecord , DeleteRecord} from "./Services/index"

function* CreateSaga(action){                                     //WorkerSaga
    let response = yield CreateRecord("subcatagory",action.payload)
        yield put({type: CREATE_SUBCATAGORY_RED, payload: response})
    
}
function* GetSaga(){                                     //WorkerSaga
    let response = yield GetRecord("subcatagory")
        yield put({type: GET_SUBCATAGORY_RED, payload: response})
    
}

function* UpdateSaga(action){                                     //WorkerSaga
        yield UpdateRecord("subcatagory",action.payload)
        yield put({type: UPDATE_SUBCATAGORY_RED, payload: action.payload})
    
}

function* DeleteSaga(action){                                     //WorkerSaga
        yield DeleteRecord("subcatagory",action.payload)
        yield put({type: DELETE_SUBCATAGORY_RED, payload: action.payload})
    
}
export default function* SubCatagorySaga(){                  //WatcherSaga
    yield takeEvery(CREATE_SUBCATAGORY,CreateSaga)
    yield takeEvery(GET_SUBCATAGORY,GetSaga)
    yield takeEvery(UPDATE_SUBCATAGORY,UpdateSaga)
    yield takeEvery(DELETE_SUBCATAGORY,DeleteSaga)
}
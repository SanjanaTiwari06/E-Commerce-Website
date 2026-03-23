import { takeEvery, put } from "redux-saga/effects"
import { CREATE_FEATURE, CREATE_FEATURE_RED, DELETE_FEATURE, DELETE_FEATURE_RED, GET_FEATURE, GET_FEATURE_RED, UPDATE_FEATURE, UPDATE_FEATURE_RED } from "../Constant"
import { CreateRecord , GetRecord, UpdateRecord , DeleteRecord} from "./Services/index"

function* CreateSaga(action){                                     //WorkerSaga
    let response = yield CreateRecord("feature",action.payload)
        yield put({type: CREATE_FEATURE_RED, payload: response})
    
}
function* GetSaga(){                                     //WorkerSaga
    let response = yield GetRecord("feature")
        yield put({type: GET_FEATURE_RED, payload: response})
    
}

function* UpdateSaga(action){                                     //WorkerSaga
        yield UpdateRecord("feature",action.payload)
        yield put({type: UPDATE_FEATURE_RED, payload: action.payload})
    
}

function* DeleteSaga(action){                                     //WorkerSaga
        yield DeleteRecord("feature",action.payload)
        yield put({type: DELETE_FEATURE_RED, payload: action.payload})
    
}
export default function* FeatureSaga(){                  //WatcherSaga
    yield takeEvery(CREATE_FEATURE,CreateSaga)
    yield takeEvery(GET_FEATURE,GetSaga)
    yield takeEvery(UPDATE_FEATURE,UpdateSaga)
    yield takeEvery(DELETE_FEATURE,DeleteSaga)
}
import { takeEvery, put } from "redux-saga/effects"
import { CREATE_SETTING, CREATE_SETTING_RED, DELETE_SETTING, DELETE_SETTING_RED, GET_SETTING, GET_SETTING_RED, UPDATE_SETTING, UPDATE_SETTING_RED } from "../Constant"
import { CreateRecord , GetRecord, UpdateRecord , DeleteRecord} from "./Services/index"

function* CreateSaga(action){                                     //WorkerSaga
    let response = yield CreateRecord("setting",action.payload)
        yield put({type: CREATE_SETTING_RED, payload: response})
    
}
function* GetSaga(){                                     //WorkerSaga
    let response = yield GetRecord("setting")
        yield put({type: GET_SETTING_RED, payload: response})
    
}

function* UpdateSaga(action){                                     //WorkerSaga
        yield UpdateRecord("setting",action.payload)
        yield put({type: UPDATE_SETTING_RED, payload: action.payload})
    
}

function* DeleteSaga(action){                                     //WorkerSaga
        yield DeleteRecord("setting",action.payload)
        yield put({type: DELETE_SETTING_RED, payload: action.payload})
    
}
export default function* SettingSaga(){                  //WatcherSaga
    yield takeEvery(CREATE_SETTING,CreateSaga)
    yield takeEvery(GET_SETTING,GetSaga)
    yield takeEvery(UPDATE_SETTING,UpdateSaga)
    yield takeEvery(DELETE_SETTING,DeleteSaga)
}
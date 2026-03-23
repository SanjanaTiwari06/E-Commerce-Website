import { takeEvery, put } from "redux-saga/effects"
import { CREATE_FAQ, CREATE_FAQ_RED, DELETE_FAQ, DELETE_FAQ_RED, GET_FAQ, GET_FAQ_RED, UPDATE_FAQ, UPDATE_FAQ_RED } from "../Constant"
import { CreateRecord , GetRecord, UpdateRecord , DeleteRecord} from "./Services/index"

function* CreateSaga(action){                                     //WorkerSaga
    let response = yield CreateRecord("faq",action.payload)
        yield put({type: CREATE_FAQ_RED, payload: response})
    
}
function* GetSaga(){                                     //WorkerSaga
    let response = yield GetRecord("faq")
        yield put({type: GET_FAQ_RED, payload: response})
    
}

function* UpdateSaga(action){                                     //WorkerSaga
        yield UpdateRecord("faq",action.payload)
        yield put({type: UPDATE_FAQ_RED, payload: action.payload})
    
}

function* DeleteSaga(action){                                     //WorkerSaga
        yield DeleteRecord("faq",action.payload)
        yield put({type: DELETE_FAQ_RED, payload: action.payload})
    
}
export default function* FAQSaga(){                  //WatcherSaga
    yield takeEvery(CREATE_FAQ,CreateSaga)
    yield takeEvery(GET_FAQ,GetSaga)
    yield takeEvery(UPDATE_FAQ,UpdateSaga)
    yield takeEvery(DELETE_FAQ,DeleteSaga)
}
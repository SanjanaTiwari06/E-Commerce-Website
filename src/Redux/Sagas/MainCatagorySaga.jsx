import { takeEvery, put } from "redux-saga/effects"
import { CREATE_MAINCATAGORY, CREATE_MAINCATAGORY_RED, DELETE_MAINCATAGORY, DELETE_MAINCATAGORY_RED, GET_MAINCATAGORY, GET_MAINCATAGORY_RED, UPDATE_MAINCATAGORY, UPDATE_MAINCATAGORY_RED } from "../Constant"
import { CreateRecord , GetRecord, UpdateRecord , DeleteRecord} from "./Services/index"

function* CreateSaga(action){                                     //WorkerSaga
    let response = yield CreateRecord("maincatagory",action.payload)
        yield put({type: CREATE_MAINCATAGORY_RED, payload: response})
    
}
function* GetSaga(){                                     //WorkerSaga
    let response = yield GetRecord("maincatagory")
        yield put({type: GET_MAINCATAGORY_RED, payload: response})
    
}

function* UpdateSaga(action){                                     //WorkerSaga
        yield UpdateRecord("maincatagory",action.payload)
        yield put({type: UPDATE_MAINCATAGORY_RED, payload: action.payload})
    
}

function* DeleteSaga(action){                                     //WorkerSaga
        yield DeleteRecord("maincatagory",action.payload)
        yield put({type: DELETE_MAINCATAGORY_RED, payload: action.payload})
    
}
export default function* MaincatagorySaga(){                  //WatcherSaga
    yield takeEvery(CREATE_MAINCATAGORY,CreateSaga)
    yield takeEvery(GET_MAINCATAGORY,GetSaga)
    yield takeEvery(UPDATE_MAINCATAGORY,UpdateSaga)
    yield takeEvery(DELETE_MAINCATAGORY,DeleteSaga)
}
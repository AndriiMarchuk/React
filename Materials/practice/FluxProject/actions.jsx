
import {setState,getState} from "./store";
import {Dispatcher} from "./dispatcher";

let appDispatcher = new Dispatcher();

export function updateList( newItems, newTempItems ) {
    let payload = {
        type: 'UPDATE_LIST',
        newItems: newItems,
        newTempItems: newTempItems
    }
    appDispatcher.dispatch(payload);
}

appDispatcher.register(function(payload) {

    switch(payload.type) {

        case "UPDATE_LIST":
            // Updates the state of the store.
            setState(getState().merge({
                items: payload.newItems,
                tempItems: payload.newTempItems,
            }));
            break;

        default:
    }
});




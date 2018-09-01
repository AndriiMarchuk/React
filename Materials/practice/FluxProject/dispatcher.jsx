export class Dispatcher {
    callbacks = {};
    lastId = 0;

    register(callback) {
        let id = this.lastId;
        this.lastId++;
        this.callbacks[id] = callback;
    }

    unregister(id) {
        delete this.callbacks[id];
    }

    dispatch(payload) {
        for (let id in this.callbacks) {
            let callback = this.callbacks[id];
            callback(payload);
        }
    }
}

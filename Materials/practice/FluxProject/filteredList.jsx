import React from 'react';
import MyInput from "./MyInput";
import MyList from "./MyList";
import {setState,getState,connect} from "./store";
import { render } from 'react-dom';

// Setup the default store state...
setState(getState().merge({
    placeholder: 'Search...',
    items: ['First', 'Second', 'Third', 'Fourth'],
    tempItems: [],
}));

// Compose the "connected" versions of "MyInput" and
// "MyList", so that they automatically receive updates
// when the store changes state.
const ConnectedInput = connect(MyInput);
const ConnectedList = connect(MyList);

render((
        <section>
            <ConnectedInput />
            <ConnectedList />
        </section>
    ), document.getElementById('app')
);
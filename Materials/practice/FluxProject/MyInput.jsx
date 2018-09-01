import React from 'react';
import {setState, getState, connect} from "./store";
import {PropTypes} from "prop-types";
import {fromJS} from "immutable";
import {updateList} from "./actions";

// When the filter input value changes. 
function onChange(e) {
    // The state that we're working with... 
    const state = getState();

    const items = state.get('items');
    const tempItems = state.get('tempItems');

    // The new state that we're going to set on the store. 
    let newItems;
    let newTempItems;
    if (e.target.value.length === 0) {
        // If input value is empty, restore from tempItems 
        newItems = tempItems;
        newTempItems = fromJS([]);
    } else {
        if (tempItems.isEmpty()) newTempItems = items;
        else newTempItems = tempItems;
        // Filter and set "newItems". 
        const filter = new RegExp(e.target.value, 'i');
        newItems = items.filter(i => filter.test(i));
    }

    // Updates the state of the store.
    // setState(state.merge({
    //     items: newItems,
    //     tempItems: newTempItems,
    // }));
    updateList(newItems, newTempItems);
}

// Renders a simple input element to filter a list. 
const MyInput = ({value, placeholder}) => (
    <input autoFocus
           value={value}
           placeholder={placeholder}
           onChange={onChange}/> );

MyInput.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
};

export default connect(MyInput);

require("bootstrap/dist/css/bootstrap.css");
import React from 'react';
import {render} from 'react-dom';
import GridComponent from './grid';
import {SummaryActive, SummaryUsers} from './summaries';

render(
    <GridComponent>
        <SummaryUsers/>
    </GridComponent>,
    document.getElementById('app')
);

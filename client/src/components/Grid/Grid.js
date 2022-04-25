import React from "react";
//import PropTypes from 'prop-types';
// Styles
import "./Grid.css";

const Grid = ({ children }) => (
    <div className="row w-100">
        <div className="col-sm-6 w-100">{children}</div>
    </div>
);

export default Grid;
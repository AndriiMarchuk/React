import React from "react";
import PropTypes from "prop-types";
import {hashHistory} from 'react-router'
import { connect } from 'react-redux'

class GridComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            records: []
        }
    }

    componentDidMount(){
        this.refs.filterInput && this.refs.filterInput.focus();
    }

    toggleActive(index){
        let {dispatch} = this.props;
        dispatch({
            type:"TOGGLE_ACTIVE",
            value:index
        });
    }

    handleFilterChange(e){
        let value = e.target.value,
            records = this.props.records.filter((record) => record.firstName.toUpperCase().includes(value.toUpperCase()));
    }

    render() {
        let records = this.props.records.map((record, index)=>{
            return <GridRecord record={record}/>
        });
        return (
            <div style={{width:300, height: 300, padding: 20}}>
                <p>
                    <input type="text" ref="filterInput" placeholder="Filter by..." onChange={this.handleFilterChange.bind(this)}/>
                </p>
                <table className="table table-condensed">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Active</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.records.map((record, index)=>{
                        return <GridRecord record={record} key={index} toggleActive={this.toggleActive.bind(this, index)}/>
                    })}
                    </tbody>
                </table>
                <div>{this.props.children &&
                React.cloneElement(this.props.children, { records: this.props.records })}</div>
            </div>
        )
    }
}

export class GridRecord extends React.Component {
    showUserDetails(e){
        e.preventDefault();
        hashHistory.push(`/details/${this.props.record.id}`);
    }

    render(){
        let {record} = this.props;
        return <tr>
            <th onClick={this.showUserDetails.bind(this)}><a href="#">{record.id}</a></th>
            <th>{record.firstName}</th>
            <th>{record.lastName}</th>
            <th><input type="checkbox" checked={record.active} onChange={this.props.toggleActive}/></th>
        </tr>
    }
}
GridRecord.defaultProps = {
    record: {firstName: "N/A", lastName: "N/A", active: false}
};
GridRecord.propTypes = {
    record: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired
    })
};

GridComponent.propTypes = {
    records: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        records: state.grid
    }
}

export default connect(
    mapStateToProps
)(GridComponent)


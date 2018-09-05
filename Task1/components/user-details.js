import React from 'react';
import { connect } from 'react-redux'
import {UserDetail} from './user-detail';
import PropTypes from 'prop-types';
import {filterDetails, loadDataAndFilterDetails} from '../actions'

class UserDetails extends React.Component {
    componentDidMount(){
        let {dispatch} = this.props;
        dispatch(loadDataAndFilterDetails(this.props.params.id));
    }
    componentDidUpdate(prevProps){
        let {dispatch} = this.props;
        if(prevProps.params.id!==this.props.params.id){
            dispatch(loadDataAndFilterDetails(this.props.params.id));
        }
    }

    render(){
        return (
            <div>
                <h1>THIS IS PARAM FROM GRIDCOMPONENT: {this.props.params.id}</h1>
                {this.props.details.map((detail, i)=>{
                    return <UserDetail key={i} detail={detail}/>
                })}
            </div>
        )
    }
}

UserDetails.propTypes = {
    details: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        details: state.details
    }
}

export default connect(
    mapStateToProps
)(UserDetails)

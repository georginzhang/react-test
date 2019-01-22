import React, { Component } from "react";
import {connect} from 'react-redux';
import { actionCreators } from "../home/store";
class todoList extends Component {
    render() {
        const {deleteItem} = this.props;
        return (
            <div>
                {this.props.data.map((item, idx) => {
                    return (
                        <div key={idx} onClick={()=>{deleteItem(idx)}}>
                            {item}
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapDsipatch = (dispatch)=>({
    deleteItem(idx){
        dispatch(actionCreators.deleteItem(idx))
    }
})

export default connect(null,mapDsipatch)(todoList);

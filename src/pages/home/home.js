import React from "react";
import { connect } from "react-redux";
import TodoList from "../list/todoList";
import store from "../../store";
import { actionCreators } from "./store";
import { addItem } from "./store/actionCreator";
class Home extends React.Component {
    handleDelete(idx) {
        this.props.deleteItem(idx);
    }
    render() {
        const { value, list, addItem, changeValue } = this.props;
        return (
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={() => {
                        changeValue(this.input.value);
                    }}
                    ref={input => {
                        this.input = input;
                    }}
                />
                <button
                    onClick={() => {
                        addItem(this.input.value);
                    }}
                >
                    新增
                </button>
                <TodoList data={list} />
            </div>
        );
    }
}

const mapState = state => ({
    value: state.getIn(["home", "value"]),
    list: state.getIn(["home", "list"])
});

const mapDispatch = dispatch => ({
    changeValue(v) {
        dispatch(actionCreators.changeValue(v));
    },
    addItem(v) {
        dispatch(actionCreators.addItem(v));
    },
    deleteItem(index) {
        dispatch(actionCreators.deleteItem(index));
    }
});

export default connect(
    mapState,
    mapDispatch
)(Home);

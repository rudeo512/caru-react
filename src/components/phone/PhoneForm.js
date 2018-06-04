import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPhone} from '../../redux/action/phone';

class PhoneForm extends Component {
    id = 0

    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();

        this.props.addPhone({
            "name": this.state.name,
            "phone": this.state.phone,
            "id": this.id++
        });

        // 상태 초기화
        this.setState({name: '', phone: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPhone: (phone) => dispatch(addPhone(phone))
    }
}

PhoneForm = connect(undefined, mapDispatchToProps)(PhoneForm);
export default PhoneForm;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PhoneForm from './PhoneForm';
import PhoneInfoList from './PhoneInfoList';

class Phone extends Component {
    state = {
        keyword: ''
    }

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value,
        });
    }


    handleUpdate = (id, data) => {
        const {information} = this.state;
        this.setState({
            information: information.map(
                info => id === info.id
                    ? {...info, ...data} // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
                    : info // 기존의 값을 그대로 유지
            )
        })
    }


    render() {
        const {keyword} = this.state;
        const {information} = this.props;
        const filteredList = information.filter(
            info => info.name.indexOf(keyword) !== -1
        );

        return (
            <div>
                <PhoneForm/>
                <p>
                    <input
                        placeholder="검색 할 이름을 입력하세요.."
                        onChange={this.handleChange}
                        value={keyword}
                    />
                </p>
                <hr/>
                <PhoneInfoList data={filteredList}/>
            </div>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        information: state.phoneReducer
    };
}

Phone = connect(mapStateToProps, null)(Phone);
export default Phone;

// src/components/PhoneInfoList.js
import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: []
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render() {
        const {data} = this.props;
        const list = data.map(
            info => (<PhoneInfo key={info.id} info={info}/>)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;
import {ADD, DELETE, UPDATE} from '../action/phone';

const counterInitialState = [];

const phoneReducer = (state = counterInitialState, action) => {
    let arr;
    switch (action.type) {
        case ADD:
            arr = Object.create(state);
            arr.push(action.data);
            return arr;

        case UPDATE:
            arr = Object.create(state);
            return arr.map(info => info.id === action.data.id
                ? {...info, ...action.data} // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
                : info // 기존의 값을 그대로 유지
            );

        case DELETE:
            arr = Object.create(state);
            return arr.filter(info => info.id !== action.data)

        default:
            return state;
    }
};

export default phoneReducer;
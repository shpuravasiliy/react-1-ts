import {reducer, TOGGLE_CONSTANT} from './Reducer';

test('reducer should change value to opposite value', () => {

    //data
    const initialState = {
        collapsed: false,
    }

    //action
    const newState = reducer(initialState, {type: TOGGLE_CONSTANT})

    //expectations
    expect(newState.collapsed).toBe(true);

    expect(() => {reducer(initialState, {type: 'ABRA-CADABRA'})}).toThrowError();

})
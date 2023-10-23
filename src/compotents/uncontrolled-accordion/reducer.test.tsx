import {reducer, StateType, TOGGLE_CONSTANT} from './reducer';

test('reducer should change value to be true', ()=>{
    //data
    const state: StateType  = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_CONSTANT})
    //exception

    expect(newState.collapsed).toBe(true)
})
test('reducer should change value to be false', ()=>{
    //data
    const state: StateType  = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type: TOGGLE_CONSTANT})
    //exception

    expect(newState.collapsed).toBe(false)
})

test('reducer should throw error because action type is incorrect', ()=>{
    //data
    const state: StateType  = {
        collapsed: true
    }
    //action

    //exception

    expect(()=>{
        reducer(state, {type: "FAKE"})
    }).toThrowError()
})
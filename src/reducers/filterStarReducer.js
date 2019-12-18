const starFilterReducers=(state=0,action)=>{

    if(action.type==='FILTER_STAR')
    {return state=action.value}
    
    return state
    
    
    }
    export default starFilterReducers
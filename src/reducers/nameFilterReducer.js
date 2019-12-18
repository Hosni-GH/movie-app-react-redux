const nameFilterReducers=(state='',action)=>{

    if(action.type==='CHANGE_FILTER_NAME')
    {return state=action.value}
    
    return state
    }
    export default nameFilterReducers
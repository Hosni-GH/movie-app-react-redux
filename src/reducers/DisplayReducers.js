const displayReducers=(state="hidden",action)=>{

    if(action.type==='CHANGE_CLASS')
    {return state=action.value}
    else if(action.type==='HIDDEN_CLASS')
    {return state=action.value}
    
    return state
}

export default displayReducers
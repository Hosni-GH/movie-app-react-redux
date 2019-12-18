const classReducer=(state="hidden",action)=>{

    if(action.type==='DISPLAY_CLASS')
    {return state=action.value}
    else if(action.type==='HIDDEN_CLASS')
    {return state=action.value}
    
    return state
    
    
    }
    export default classReducer

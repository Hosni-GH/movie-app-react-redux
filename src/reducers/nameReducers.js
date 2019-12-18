const nameReducers=(state='',action)=>{

    if(action.type==='CHANGE_NAME')
    {return state=action.value}
    
    return state
    
    
    }
    export default nameReducers
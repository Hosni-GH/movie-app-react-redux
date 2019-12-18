const imgReducers=(state='',action)=>{

    if(action.type==='CHANGE_IMG')
    {return state=action.value}
    
    return state
    
    
    }
    export default imgReducers
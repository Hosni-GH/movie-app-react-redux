const ratingReducers=(state='',action)=>{

    if(action.type==='CHANGE_Rating')
    {return state=action.value}
    
    return state
    
    
    }
    export default ratingReducers
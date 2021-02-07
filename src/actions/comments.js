import * as api from '../api';

//Action Creators 

export const getComments = () => (dispatch) => 
   { try 
    {
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL',payload:data});
    } catch(error)
    {console.log(error.message);
    
    }
   }
{
const action = {type: 'FETCH_ALL',payload: []
}

dispatch (action); 

}
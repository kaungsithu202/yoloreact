import React,{ useState} from 'react';

const  StateContext= React.createContext({
    query:'',
    setQuery:'',
});
export default StateContext;


export const StateContextProvider = (props)=>{

const [query, setQuery] = useState("");



return (
	<StateContext.Provider value={{query:query,setQuery:setQuery}}>
		{props.children}
	</StateContext.Provider>
);
}
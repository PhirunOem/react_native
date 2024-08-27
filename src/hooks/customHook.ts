
import { useReducer } from "react";

function complexStateReducer(state:any, action:any) {
  switch (action.type) {
    case "SET_PROPERTY":
      return { ...state, [action.key]: action.value };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
function useComplexStateWithReducer(initialState:any) {
  const [state, dispatch] = useReducer(complexStateReducer, initialState);
  function setProperty(key:any, value:any) { 
    dispatch({ type: "SET_PROPERTY", key, value });
  }
  return [state, setProperty];
}
export {useComplexStateWithReducer}


// export default function useFetch(url: string) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         setData(json);
//         setLoading(false);
//       } catch (error: any) {
//         setError(error);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [url]);

//   return {data, loading, error};
// }

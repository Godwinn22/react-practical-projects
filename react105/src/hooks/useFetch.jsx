import { useTodoDataContext } from "../api_hook/useTodoDataContext";

export default function useFetch(url) {

	const { todo, dispatch } = useTodoDataContext()

    function fetchHandle() {
        // async function handleCall(){
			
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    console.log("Response not okay!!");
                    return;
                }
				console.log(res)
                return res.json();
            })
            .then((data) => {
                console.log(data);
				dispatch({ type: 'SET_DATASET', payload: data})
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    console.log("pending");
                }
            });
    }

	return{ fetchHandle }
}

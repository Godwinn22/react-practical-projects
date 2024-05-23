export default function useFetch(url) {


    function fetchHandle(setData) {
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
                setData(data);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    console.log("pending");
                }
            });
    }

	return{ fetchHandle}
}

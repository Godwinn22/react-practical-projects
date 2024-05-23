export default function usePost(url) {


    function postHandle(category, workout, setLoad) {
        // async function handleCall(){

		const data = {
			category: category,
			workout: workout
		}
        fetch(url, {
			headers: {
				"Content-Type": "application/json"
			},
			method: 'POST',
			body: JSON.stringify(data)
		})
            .then((res) => {
                if (!res.ok) {
                    console.log("Response not okay!!");
                    return;
                }

				setLoad(true)
                return res.json();
            })
            .then((data) => {
                // console.log(data);
                // setData(data);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    console.log("pending");
                }
            });
			setLoad(false)
    }

	return { postHandle }
}

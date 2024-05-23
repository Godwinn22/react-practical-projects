import { useState } from "react";

export default function useDelete(url) {

    function DeleteHandler(id, setLoad) {
        // async function handleCall(){
			
        fetch(url + id, {
			headers: {
				"Content-Type": "application/json"
			},
			method: 'DELETE'
		})
            .then((res) => {
                if (!res.ok) {
                    console.log("Response not okay!!");
                    return;
                }
				console.log(res)
				setLoad(true) // Initiate update
                return res.json();
            })
            .then((data) => {
                // console.log(data);
                // setSingleData(data);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    console.log("pending");
                }
            });
			setLoad(false) // Halt update
    }

	return{ DeleteHandler, }
}

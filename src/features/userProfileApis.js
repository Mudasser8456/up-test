import axios from "axios";

export const getUser = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        },
    }

    try {
        const res = await axios.get('https://62cd7b4aa43bf78008596606.mockapi.io/api/v1/user1/1', config);
        return res.data

    } catch (err) {
        console.log(err)
    }
};


export const updateUser = async ({ firstName, lastName, phone }) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        },
    }
    const body = JSON.stringify({
        firstName, lastName, phone
    })
    try {
        const res = await axios.put('https://62cd7b4aa43bf78008596606.mockapi.io/api/v1/user1/1',body, config);
        return res.data

    } catch (err) {
        console.log(err)
    }
};


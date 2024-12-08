async function registerForCamping(userDetails) {
    try {
        if (!userDetails.name || !userDetails.email) {
            throw new Error("Name and email are required for registration.");
        }
        const response = await fakeApiCall (userDetails);

    if (response.status !== 200) {
        throw new Error("Registration failed. please try again later.");
    }
    console.log("Registration successful!", response.data);
} catch (error) {
    console.error("An error occurred during registration:", error.message);
    alert(`Error: ${error.message}`);
    }
   
}

function fakeApiCall(userDetails) {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve({status: 200, data: userDetails});
        },2000);
    });
}

const userDetails = {
    name: "Ayzoh La",
    email: "ayzoh.la@example.com"
};
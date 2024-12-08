const registreredCampers = [];

async function registerCamper() {
    try {
        await new Promise((resolve, reject) =>{
            setTimeout(() =>{
                const errorOccured = Math.random();
                if (errorOccured) {
                    reject(new Error ("Registration failed due to a server error"));
                } else {
                    resolve();
                }
            }, 1000);
        });
        registreredCampers.push (camper);
        console.log (`Successfully registered: ${camper.name}`);
    } catch  (error) {
        console.error(`Error: ${error.message}`);
        alert(`Oops! ${error.message} please try again later.`);
    }
}

const camper1 = {name: "Ayzoh La", age: 20};
const camper2 = {name: "Pablo P",age: 25};

registerCamper(camper1);
registerCamper(camper2);
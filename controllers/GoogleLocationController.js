const GoogleLocationModal = require("../models/GoogleLocation");

const validateApiKey = (req,res,next) => {
    const apiKey = req.query.apiKey;

    if(!apiKey || apiKey !== "YOUR_SECRET_API_KEY"){
        return res.status(401).json({ status: 401, message: 'Unauthorized' });
    }
    next();
}

const createGoogleLocation = async (req, res) => {
    try {
        const { name, address, coordinates } = req.body;

        // You can remove this line if you are not using the apiKey in the request body
        const apiKeyFromBody = req.body.apiKey;

        // Validate the API key
        if (!apiKeyFromBody || apiKeyFromBody !== 'YOUR_SECRET_API_KEY') {
            return res.status(401).json({ status: 401, message: 'Unauthorized' });
        }

        const newLocation = new GoogleLocationModal({
            name,
            address,
            coordinates
        });

        await newLocation.save();
        return res.status(201).json({ status: 201, message: "Successfully Add the GoogleLocation", data: newLocation });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Server side error  Add the GoogleLocation" });
    }
}

const GetGoogleLocation = async (req, res) => {
    try {
        const GoogleLocation = await GoogleLocationModal.find();
        if (GoogleLocation.length > 0) {
            const GoogleLocationData = GoogleLocation.map((GoogleLocationResult) => ({
                _id: GoogleLocationResult._id,
                name: GoogleLocationResult.name,
                address: GoogleLocationResult.address,
                coordinates: GoogleLocationResult.coordinates
            }));
            return res.status(200).json({
                status: 200, message: "successfully fetch the GoogleLocation Data",
                data: GoogleLocationData
            });
        }
        return res.status(400).json({ status: 400, message: "data Not Found fetch the GoogleLocation Data" });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "server side error fetch the GoogleLocation Data" });
    }
}
module.exports = { validateApiKey, createGoogleLocation, GetGoogleLocation };

// const createGoogleLocation = async (req, res) => {
//     try {
//         const { name, address, coordinates } = req.body;
//         const newLocation = new GoogleLocationModal({
//             name,
//             address,
//             coordinates
//         })
//         await newLocation.save();
//         return res.status(201).json({ status: 201, message: "Successfully Add the GoogleLocation", data: newLocation })
//     }
//     catch (error) {
//         return res.status(500).json({ status: 500, message: "Server side error  Add the GoogleLocation" })

//     }
// }

// const GetGoogleLocation = async (req, res) => {
//     try {
//         const GoogleLocation = await GoogleLocationModal.find();
//         if (GoogleLocation.length > 0) {
//             const GoogleLocationData = GoogleLocation.map((GoogleLocationResult) => ({
//                 _id: GoogleLocationResult._id,
//                 name: GoogleLocationResult.name,
//                 address: GoogleLocationResult.address,
//                 coordinates: GoogleLocationResult.coordinates
//             }))
//             return res.status(200).json({
//                 status: 200, message: "successfully fetch the GoogleLocation Data"
//                 , data: GoogleLocationData
//             })
//         }
//         return res.status(400).json({ status: 400, message: "data Not Found fetch the GoogleLocation Data" })

//     } catch (error) {
//         return res.status(500).json({ status: 500, message: "server side error fetch the GoogleLocation Data" })

//     }
// }
// module.exports = { createGoogleLocation, GetGoogleLocation }
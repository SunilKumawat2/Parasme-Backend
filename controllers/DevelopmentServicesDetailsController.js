const DevelopmentServicesDetails = require("../models/DevelopmentServicesDetails");


const CreateDevelopmentServicesDetails = async (req, res) => {
    try {
        const { title, description, developmentService } = req.body;
        const images = req.file ? req.file.filename : null;
        const newCreateDevelopmentServices = new DevelopmentServicesDetails({
            title,
            description,
            images,
            developmentService,
        })
        await newCreateDevelopmentServices.save();
        res.status(201).json({
            status: 201,
            message: "Successfully Add the DevelopmentServicesDetails"
            , data: newCreateDevelopmentServices
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Server Side Error Add the DevelopmentServicesDetails"
        })
    }
}

const GetDevelopmentServicesDetails = async (req, res) => {
    try {
        const DevelopmentServicess = await DevelopmentServicesDetails
            .find()
            .populate('developmentService')
        if (DevelopmentServicess.length > 0) {
            const DevelopmentServicessData = DevelopmentServicess.map((DevelopmentServicessResult) => ({
                _id: DevelopmentServicessResult._id,
                title: DevelopmentServicessResult.title,
                description: DevelopmentServicessResult.description,
                images: DevelopmentServicessResult.images,
                developmentService: {
                    _id: DevelopmentServicessResult.developmentService ?
                        DevelopmentServicessResult.developmentService._id : null,
                    // Include other fields from the development service as needed
                }
            }));

            res.status(200).json({
                status: 200,
                message: "Successfully fetch the DevelopmentServicesDetails",
                data: DevelopmentServicessData,
            });
        } else {
            res.status(400).json({
                status: 400,
                message: "Data not found for DevelopmentServicesDetails",
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Server Side Error fetch the DevelopmentServicesDetails",
        });
    }
};

const DeleteDevelopmentServicesDetails = async (req, res) => {
    try {
        const { _id } = req.params;
        const DevelopmentServicess = await DevelopmentServicesDetails.findByIdAndDelete(_id);
        if (!DevelopmentServicess) {
            res.status(400).json({
                status: 400
                , message: "data Not Found Delete the DevelopmentServicesDetails"
            })
        }
        else {
            res.status(200).json({
                status: 200
                , message: "Successfully Delete the DevelopmentServicesDetails"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500
            , message: "Server Side Error Delete the DevelopmentServices"
        })
    }
}

const GetDevelopmentServicesDetailsById = async (req, res) => {
    try {
        const { _id } = req.params;
        // Fetch the DevelopmentServicesDetails by _id
        const developmentServicesDetail = await DevelopmentServicesDetails.find({ developmentService: _id });
        if (!developmentServicesDetail || developmentServicesDetail.length === 0) {
            return res.status(404).json({
                status: 404,
                message: "DevelopmentServicesDetails not found",
            });
        }
        // Respond with the data
        res.status(200).json({
            status: 200,
            message: "Successfully fetch the DevelopmentServicesDetails By Id",
            data: developmentServicesDetail, // Send the array directly
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Server Side Error fetching DevelopmentServicesDetails By Id",
        });
    }
};


const EditDevelopmentServicesDetails = async (req, res) => {
    try {
        const { _id } = req.params;
        const { title, description } = req.body;
        const images = req.file ? req.file.filename : null;
        const DevelopmentServicess = await DevelopmentServicesDetails.findByIdAndUpdate(_id, {
            title,
            description,
            images
        }, { new: true })
        if (!DevelopmentServicess) {
            res.status(400).json({
                status: 400,
                message: "data Not Found Edit the DevelopmentServicesDetails"
            })
        }
        else {
            res.status(200).json({
                status: 200,
                message: "Successfully Edit the DevelopmentServicesDetails", data: DevelopmentServicess
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Server Side Error Edit the DevelopmentServices"
        })
    }
}
module.exports = {
    CreateDevelopmentServicesDetails,
    GetDevelopmentServicesDetails,
    DeleteDevelopmentServicesDetails,
    GetDevelopmentServicesDetailsById,
    EditDevelopmentServicesDetails
}
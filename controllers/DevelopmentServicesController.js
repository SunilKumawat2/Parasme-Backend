const DevelopmentServices = require("../models/DevelopmentServices");

const CreateDevelopmentServices = async (req, res) => {
    try {
        const { main_title, short_description } = req.body;
        const images = req.file ? req.file.filename : null;
        const newCreateDevelopmentServices = new DevelopmentServices({
            main_title,
            short_description,
            images,
        })
        await newCreateDevelopmentServices.save();
        res.status(201).json({
            status: 201,
            message: "Successfully Add the DevelopmentServices"
            , data: newCreateDevelopmentServices
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Server Side Error Add the DevelopmentServices"
        })
    }
}
const GetDevelopmentServices = async (req, res) => {
    try {
        const DevelopmentServicess = await DevelopmentServices.find();
        if (DevelopmentServicess.length > 0) {
            const DevelopmentServicessData = DevelopmentServicess.map((DevelopmentServicessResult) => ({
                _id: DevelopmentServicessResult._id,
                main_title: DevelopmentServicessResult.main_title,
                short_description: DevelopmentServicessResult.short_description,
                images: DevelopmentServicessResult.images,
            }))
            res.status(200).json({
                status: 200
                , message: "successfully fetch the DevelopmentServices"
                , data: DevelopmentServicessData
            })
        }
        else {
            res.status(400).json({
                status: 400
                , message: "data Not Found fetch the DevelopmentServices"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500
            , message: "Server Side Error fetch the DevelopmentServices"
        })
    }
}
const DeleteDevelopmentServices = async (req, res) => {
    try {
        const { _id } = req.params;
        const DevelopmentServicess = await DevelopmentServices.findByIdAndDelete(_id);
        if (!DevelopmentServicess) {
            res.status(400).json({
                status: 400
                , message: "data Not Found Delete the DevelopmentServices"
            })
        }
        else {
            res.status(200).json({
                status: 200
                , message: "Successfully Delete the DevelopmentServices"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500
            , message: "Server Side Error Delete the DevelopmentServices"
        })
    }
}
const GetDevelopmentServicesById = async (req, res) => {
    try {
        const { _id } = req.params;
        const DevelopmentServicesss = await DevelopmentServices.findById(_id);
        if (!DevelopmentServicesss) {
            res.status(400).json({
                status: 400
                , message: "data Not Found fetch the DevelopmentServices"
            })
        }
        const DevelopmentServicessData = {
            _id: DevelopmentServicesss._id,
            main_title: DevelopmentServicesss.main_title,
            short_description: DevelopmentServicesss.short_description,
            images: DevelopmentServicesss.images,
        }
        res.status(200).json({
            status: 200,
            message: "Successfully Fetch the DevelopmentServicesss By Id"
            , data: DevelopmentServicessData
        })
    } catch (error) {
        res.status(500).json({
            status: 500
            , message: "Server Side Error fetch the DevelopmentServices By Id"
        })
    }
}
const EditDevelopmentServices = async (req, res) => {

    try {
        const { _id } = req.params;
        const { main_title, short_description} = req.body;
        const images = req.file ? req.file.filename : null;
        const DevelopmentServicess = await DevelopmentServices.findByIdAndUpdate(_id, {
            main_title,
            short_description,
            images
        }, { new: true })
        if (!DevelopmentServicess) {
            res.status(400).json({
                status: 400,
                message: "data Not Found Edit the DevelopmentServices"
            })

        }
        else {
            res.status(200).json({
                status: 200,
                message: "Successfully Edit the DevelopmentServices", data: DevelopmentServicess
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
    CreateDevelopmentServices,
    GetDevelopmentServices,
    DeleteDevelopmentServices,
    GetDevelopmentServicesById,
    EditDevelopmentServices
}
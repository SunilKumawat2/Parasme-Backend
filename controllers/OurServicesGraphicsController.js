const OurServicesGraphicses = require("../models/OurServicesGraphics")

const CreateOurServicesGraphicses = async (req, res) => {
    try {
        const { title, description, sub_title, about_page, sub_description } = req.body;
        const images = req.file ? req.file.filename : null;

        const newCreateOurServicesGraphicses = new OurServicesGraphicses({
            title,
            description,
            sub_title,
            sub_description,
            about_page,
            images
        })
        await newCreateOurServicesGraphicses.save();
        return res.status(201).json({
            status: 201,
            message: "Sucessfully Add The OurServicesGraphicses",
            data: newCreateOurServicesGraphicses
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Server side error Add The OurServicesGraphicses"
        })
    }
}
const GetOurServicesGraphicses = async (req, res) => {
    try {
        const OurServicesGraphics = await OurServicesGraphicses.find();
        if (OurServicesGraphics.length > 0) {
            const OurServicesGraphicsData = OurServicesGraphics.map((OurServicesGraphicsResult) => ({
                _id: OurServicesGraphicsResult._id,
                title: OurServicesGraphicsResult.title,
                description: OurServicesGraphicsResult.description,
                sub_title: OurServicesGraphicsResult.sub_title,
                sub_description: OurServicesGraphicsResult.sub_description,
                images: OurServicesGraphicsResult.images,
                about_page: OurServicesGraphicsResult.about_page
            }))
            return res.status(200).json({
                status: 200
                , message: "Sucessfully Get The  the OurServicesGraphicses",data:OurServicesGraphicsData
            })  
        } return res.status(400).json({
            status: 400
            , message: "data Not Found the OurServicesGraphicses"
        })  
      
    } catch (error) {
        return res.status(500).json({
            status: 500
            , message: "Server Side Error the OurServicesGraphicses"
        })
    }
}
const DeleteServicesGraphics = async (req, res) => {
    try {
        const { _id } = req.params;
        const OurServicesGraphics = await OurServicesGraphicses.findByIdAndDelete(_id);
        if (!OurServicesGraphics) {
            return res.status(400).json({ status: 400, message: "Data Not Found the Delete The ServicesGraphics" })
        }
        return res.status(200).json({ status: 200, message: "Sucessfully Delete The ServicesGraphics" })

    } catch (error) {
        return res.status(500).json({ status: 500, message: "Server Side Error the Delete The ServicesGraphics" })
    }
}
const GetOurServicesGraphicsesById = async (req, res) => {
    try {
        const { _id } = req.params;
        const OurServicesGraphics = await OurServicesGraphicses.findById(_id);
        if (!OurServicesGraphics) {
            return res.status(400).json({ status: 400, message: "Data Not Found the Get The ServicesGraphics" })
        }
        const OurServicesGraphicsData = {
            _id: OurServicesGraphics._id,
            title: OurServicesGraphics.title,
            description: OurServicesGraphics.description,
            sub_title: OurServicesGraphics.sub_title,
            sub_description: OurServicesGraphics.sub_description,
            images: OurServicesGraphics.images,
            about_page: OurServicesGraphics.about_page
        }
        return res.status(200).json({
            status: 200, message: "Sucessfully Get The ServicesGraphics By id"
            , data: OurServicesGraphicsData
        })
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Server Side error Get The ServicesGraphics By id" })
    }
}
const EditOurServicesGraphics = async (req, res) => {
    try {
        const { _id } = req.params;
        const { title, description, sub_description, sub_title, about_page } = req.body;
        const images = req.file ? req.file.filename : null;
        const OurServicesGraphics = await OurServicesGraphicses.findByIdAndUpdate(_id, {
            title,
            description,
            sub_description,
            sub_title,
            about_page,
            images
        }, { new: true });
        if (!OurServicesGraphics) {
            return res.status(400).json({ status: 400, message: "data Not Found Edit Our Services Graphics" })
        }
        return res.status(200).json({
            status: 200,
            message: "Sucessfully Edit Our Services Graphics"
            , data: OurServicesGraphics
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Server Side error  Edit Our Services Graphics"
        })
    }
}

module.exports = {
    CreateOurServicesGraphicses, GetOurServicesGraphicses, DeleteServicesGraphics,
    GetOurServicesGraphicsesById, EditOurServicesGraphics
}
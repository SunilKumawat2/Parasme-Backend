const AllPortFolios = require("../models/AllPortFolios");

const CreateAllPortFolios = async (req, res) => {
    try {
        const { title, decripation, andriod_link, ios_link } = req.body;
        const images = req.file ? req.file.filename : null;

        const newcreateAllPortFolios = new AllPortFolios({
            title,
            decripation,
            andriod_link,
            ios_link,
            images
        })
        await newcreateAllPortFolios.save();
        return res.status(201).json({
            status: 201,
            message: "Successfully Add The AllPortFolios",
            data: newcreateAllPortFolios
        })
    }
    catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Server Sider Error"
        })
    }
}

const GetAllPortFolios = async (req, res) => {
    try {
        const AllPortFolio = await AllPortFolios.find();
        if (AllPortFolio.length > 0) {
            const AllPortFoliosdata = AllPortFolio.map((AllPortFoliosResult) => ({
                _id: AllPortFoliosResult._id,
                title: AllPortFoliosResult.title,
                decripation: AllPortFoliosResult.decripation,
                andriod_link: AllPortFoliosResult.andriod_link,
                ios_link: AllPortFoliosResult.ios_link,
                images: AllPortFoliosResult.images
            }))
            return res.status(200).json({
                status: 200,
                message: "Successfully Get AllPortFolios",
                data: AllPortFoliosdata
            })
        }
        return res.status(404).json({ status: 404, message: "No Data Found" })
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Server Side Error" })
    }
}
const GetAllPortFoliosById = async (req, res) => {
    try {
        const { _id } = req.params;
        const AllPortFolioDetails = await AllPortFolios.findById(_id,);
        if (!AllPortFolioDetails) {
            return res.status(404).json({ status: 404, message: "No Data Found For the GetAllPortFoliosById " });
        }
        const AllPortFoliosdata = {
            _id: AllPortFolioDetails._id,
            title: AllPortFolioDetails.title,
            decripation: AllPortFolioDetails.decripation,
            andriod_link: AllPortFolioDetails.andriod_link,
            ios_link: AllPortFolioDetails.ios_link,
            images: AllPortFolioDetails.images
        }
        return res.status(200).json({
            status: 200, message: "Successfully Get AllPortFolios By id",
            data: AllPortFoliosdata
        });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Server Side Error AllPortFolios By id" });
    }
}
const DeleteAllPortFolios = async (req, res) => {
    try {
        const _id = req.params._id;
        const AllPortFoliosDetails = await AllPortFolios.findByIdAndDelete(_id);
        if (!AllPortFoliosDetails) {
            return res.status(404).json({ status: 404, message: "No Data Found" });
        }
        return res.status(200).json({ status: 200, message: "Successfully Delete AllPortFolios By id", AllPortFoliosDetails });
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Server Side Error AllPortFolios By id" });
    }
}
const EditAllPortFolios = async (req, res) => {
    try {
        const _id = req.params._id;
        const { title, decripation, andriod_link, ios_link } = req.body;
        const images = req.file ? req.file.filename : null;
        const AllPortFoliosDetails = await AllPortFolios.findByIdAndUpdate(
            _id,
            {
                title: title,
                decripation: decripation,
                andriod_link: andriod_link,
                ios_link: ios_link,
                images: images
            },
            { new: true }
        );

        if (!AllPortFoliosDetails) {
            return res.status(404).json({ status: 404, message: "No Data Found" });
        }

        console.log("Updated AllPortFoliosDetails:", AllPortFoliosDetails);

        return res.status(200).json({
            status: 200,
            message: "Successfully Edit AllPortFolios By id",
            data: AllPortFoliosDetails
        });
    } catch (error) {
        console.error("Error Updating AllPortFolios:", error);
        return res.status(500).json({ status: 500, message: "Server Side Error AllPortFolios By id" });
    }
};

module.exports = {
    CreateAllPortFolios,
    GetAllPortFolios,
    GetAllPortFoliosById,
    DeleteAllPortFolios,
    EditAllPortFolios
}
const WebPortFolios = require('../models/WebPortFolios');

const CreateWebPortFolios = async (req, res) => {
    try {
        const { title, description, andriod_link, ios_link } = req.body;
        const images = req.file ? req.file.filename : null;

        const newWebPortFolios = new WebPortFolios({
            title,
            description,
            andriod_link,
            ios_link,
            images
        })
        await newWebPortFolios.save();
        return res.status(201).json({ status: 201, message: "Web Portfolio Created Successfully", data: newWebPortFolios });
    }
    catch (error) {
        return res.status(500).json({ status: 500, message: "Server Sider Error CreateWebPortFolios" });

    }
}

const GetWebPortFolios = async (req, res) => {
    try {
        const AllWebPortFolios = await WebPortFolios.find();
        if (AllWebPortFolios.length > 0) {
            const AllWebPortFoliosData = AllWebPortFolios.map((AllWebPortFoliosResult) => ({
                _id: AllWebPortFoliosResult._id,
                title: AllWebPortFoliosResult.title,
                description: AllWebPortFoliosResult.description,
                andriod_link: AllWebPortFoliosResult.andriod_link,
                ios_link: AllWebPortFoliosResult.ios_link,
                images: AllWebPortFoliosResult.images
            }))
            return res.status(200).json({ status: 200, message: "All Web Portfolio Data", data: AllWebPortFoliosData });
        }
        return res.status(400).json({ status: 400, message: "Data Not Found All Web Portfolio Data" });

    } catch (error) {
        return res.status(500).json({ status: 500, message: "Server Side Error GetWebPortFolios" });

    }
}

const DeleteWebPortFolios = async (req, res) => {
    try {
        const _id = req.params._id;
        const DeleteWebPortFolio = await WebPortFolios.findByIdAndDelete(_id);
        if (!DeleteWebPortFolio) {
            return res.status(404).json({
                status: 404,
                message: "Web Portfolio Not Found For The Delete"
            })
        }
        return res.status(200).json({
            status: 200,
            message: "Successfully Delete The Web Portfolio",
            data: DeleteWebPortFolio
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "server side error Delete The Web Portfolio"
        })
    }
}

const GetWebPortFoliosById = async (req, res) => {
    try {
        const _id = req.params._id;
        const WebPortFolio = await WebPortFolios.findById(_id);
        if (!WebPortFolio) {
            return res.status(404).json({ status: 404, message: "Data Not Found The WePortFolios By Id" })

        }
        const WebPortFolioData = {
            _id: WebPortFolio._id,
            title: WebPortFolio.title,
            description: WebPortFolio.description,
            andriod_link: WebPortFolio.andriod_link,
            ios_link: WebPortFolio.ios_link,
            images: WebPortFolio.images
        }
        return res.status(200).json({
            status: 200,
            message: "Successfully Fetch The WePortFolios By Id"
            , data: WebPortFolioData
        })

    } catch (error) {
        return res.status(500).json({ status: 500, message: "Server Side Error The WePortFolios By Id" })
    }
}

const EditWebPortFolios = async (req, res) => {
    try {
        const _id = req.params._id;
        const { title, description, andriod_link, ios_link } = req.body;
        const images = req.file ? req.file.filename : null;
        const WebPortFolioUpdate = await WebPortFolios.findByIdAndUpdate(_id, {
            title: title
            , description: description,
            andriod_link: andriod_link,
            ios_link: ios_link,
            images: images
        }, { new: true });
        return res.status(200).json({
            status: 200,
            message: "Sucessfully Update WebPortFolios"
            , data: WebPortFolioUpdate
        })
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Server Side Error Update WebPortFolios" })
    }
}

module.exports = { CreateWebPortFolios, GetWebPortFolios, DeleteWebPortFolios, GetWebPortFoliosById, EditWebPortFolios };
const SEO = require("../models/SEO")

const CreateSEO = async (req, res) => {
    try {
        const { title, description, sub_title, sub_description, about_page } = req.body;
        const images = req.file ? req.file.filename : null;

        const newSEO = new SEO({
            title,
            description,
            sub_title,
            sub_description,
            about_page,
            images
        })
        await newSEO.save();
        return res.status(201).json({ status: 201, message: "SEO Created Successfully", data: newSEO })
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Server Side Error Creating  SEO" })
    }
}
const GetSEO = async (req, res) => {
    try {
        const SEOS = await SEO.find();
        if (SEOS.length > 0) {
            const SEOSdata = SEOS.map((SEOResult) => ({
                _id: SEOResult._id,
                title: SEOResult.title,
                description: SEOResult.description,
                sub_title: SEOResult.sub_title,
                sub_description: SEOResult.sub_description,
                about_page: SEOResult.about_page,
                images: SEOResult.images
            }))
            return res.status(200).json({ status: 200, message: "SEO Fetched Successfully", data: SEOSdata })
        }
        res.status(400).json({ status: 400, message: "SEO Data Not Found " })
    } catch (error) {
        res.status(500).json({ status: 500, message: "Server side the Fetch the SEO Data " })

    }
}
const DeleteSEO = async (req, res) => {
    try {
        const { _id } = req.params;
        const SEOS = await SEO.findByIdAndDelete(_id);
        if (!SEOS) {
            return res.status(400).json({ status: 400, message: "SEO Data Not Found" })
        }
        return res.status(200).json({ status: 200, message: "Successfully Delete The SEO Section", data: SEOS })
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Server side error Delete The SEO Section" })

    }
}
const GetSEOById = async (req, res) => {
    try {
        const _id = req.params._id;
        const SEOS = await SEO.findById(_id)
        if (!SEOS) {
            return res.status(400).json({ status: 400, message: "SEO Data Not Found By Id" })
        }
        const SEOSdata = {
            _id: SEOS._id,
            title: SEOS.title,
            description: SEOS.description,
            sub_description: SEOS.sub_description,
            sub_title: SEOS.sub_title,
            about_page: SEOS.about_page,
            images: SEOS.images,
        }
        return res.status(200).json({ status: 200, message: "Successfully Get By Id SEO Data ", data: SEOSdata })

    } catch (error) {
        return res.status(500).json({ status: 500, message: "Server side Error Get By Id SEO Data " })

    }
}
const EditSEO = async (req, res) => {
    try {
        const { _id } = req.params;
        const { title, description, sub_title,  sub_description,  about_page} = req.body;
        const images = req.file ? req.file.filename : null;
        const SEOS = await SEO.findByIdAndUpdate(_id, {
            title,
            description,
            sub_title,
            sub_description,
            about_page, images
        }, { new: true })
        if (!SEOS) {
            return res.status(400).json({ status: 400, message: "data Not Found Edit Seo" })
        }
        return res.status(200).json({ status: 200, message: "Successfully Edit Seo", data: SEOS })
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Server Side Erro Edit Seo" })
    }
}
module.exports = { CreateSEO, GetSEO, DeleteSEO, GetSEOById, EditSEO }

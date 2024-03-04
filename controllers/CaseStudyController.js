const CaseStudy = require('../models/CaseStudy');

const CreateCaseStudy = async (req, res) => {
    try {
        const { app_title, app_type, android_link, ios_link, about_app } = req.body;
        const images = req.file ? req.file.filename : null;

        const newcaseStudy = new CaseStudy({
            app_title,
            app_type,
            android_link,
            ios_link,
            about_app,
            images
        })
        await newcaseStudy.save();
        res.status(201).json({ status: 201, message: "Successfully add The Case Study section", data: newcaseStudy })
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Server error' });

    }
}

const GetCaseStudy = async (req, res) => {
    try {
        const CaseStudies = await CaseStudy.find();
        if (CaseStudies.length > 0) {
            const CaseStudyData = CaseStudies.map((CaseStudiesResult) => ({
                _id: CaseStudiesResult._id,
                app_title: CaseStudiesResult.app_title,
                app_type: CaseStudiesResult.app_type,
                android_link: CaseStudiesResult.android_link,
                ios_link: CaseStudiesResult.ios_link,
                about_app: CaseStudiesResult.about_app,
                images: CaseStudiesResult.images
            }))
            res.status(200).json({
                status: 200,
                message: "Successfully get The Case Study section",
                data: CaseStudyData
            })
        }
        else {
            res.status(404).json({ status: 404, message: "No Case Study section found" })
        }
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Server error while fetching the Case Study section" })
    }
}

const DeleteCaseStudy = async (req, res) => {
    try {
        const { _id } = req.params;
        const deleteCaseStudy = await CaseStudy.findByIdAndDelete(_id);
        if (!deleteCaseStudy) {
            return res.status(404).json({ status: 404, message: "Case Study not found" });
        }
        return res.status(200).json({
            status: 200,
            message: "Successfully delete the Case Study section"
            , deleteCaseStudy
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Server error while deleting the Case Study section"
        });

    }

}

const GetCaseStudyById = async (req, res) => {
    try {
        const { _id } = req.params;
        const CaseStudyById = await CaseStudy.findById(_id);
        if (!CaseStudyById) {
            return res.status(404).json({ status: 404, message: "Case Study not found" })

        }
        const CaseStudyData = {
            _id: CaseStudyById._id,
            app_title: CaseStudyById.app_title,
            app_type: CaseStudyById.app_type,
            android_link: CaseStudyById.android_link,
            ios_link: CaseStudyById.ios_link,
            about_app: CaseStudyById.about_app,
            images: CaseStudyById.images
        }
        res.status(200).json({
            status: 200,
            message: "Successfully Fetch the Case Study By Id", data: CaseStudyData
        })
    }
    catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Server error while fetching the Case Study By Id"
        })
    }
}

const EditCaseStudy = async (req, res) => {
    try {
        const { _id } = req.params;
        const { app_title, app_type, android_link, ios_link, about_app } = req.body;
        const images = req.file ? req.file.filename : null;
        const EditCaseStudy = await CaseStudy.findByIdAndUpdate(_id, {
            app_title,
            app_type,
            android_link, ios_link, about_app,images
        }, { new: true })
        if (!EditCaseStudy) {
            return res.status(404).json({ status: 404, message: "Case Study not found" })

        }
        else {
            return res.status(201).json({
                status: 201,
                message: "Successfully Edit the Case Study section", EditCaseStudy
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Server error while editing the Case Study section"
        })
    }

}

module.exports = { CreateCaseStudy, GetCaseStudy, DeleteCaseStudy, GetCaseStudyById, EditCaseStudy };
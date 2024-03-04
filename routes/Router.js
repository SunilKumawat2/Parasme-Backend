const AwardController = require('../controllers/AwardControllers');
const AllPortFoliosController = require('../controllers/AllPortFoliosController');
const BlogController = require('../controllers/BlogController');
const BrandingProjectsController = require("../controllers/BrandingProjectController");
const CaseStudyController = require('../controllers/CaseStudyController');
const ClientControllers = require("../controllers/ClientController");
const ContactFormController = require("../controllers/ContactFormController");
const HelpingFormController = require("../controllers/HelpingFormController");
const LogoController = require("../controllers/LogoController");
const MessageboxController = require("../controllers/MessageboxController");
const MobilePortFoliosController = require('../controllers/mobilePortFoliosController');
const OurServicesGraphicsController = require("../controllers/OurServicesGraphicsController")
const OurServicesWebDesignRouter = require("../controllers/OurServicesWebDesignController");
const OurServicesEcommerceController = require("../controllers/OurServicesEcommerceController");
const OurServicesMobileController = require("../controllers/OurServicesMobileController");
const OurServicesPPCController = require("../controllers/OurServicesPPCController");
const PartnerController = require("../controllers/PartnerController");
const PortFoliosController = require("../controllers/PortFoliosController");
const SEOController = require("../controllers/SEOController");
const SliderControllers = require("../controllers/SliderControllers");
const SocialMediaLinkController = require("../controllers/SocialMediaLinkController");
const TeamController = require('../controllers/TeamControllers');
const CreateTechnology = require("../controllers/TechnologyController");
const WebPortFoliosController = require('../controllers/WebPortFoliosController');
const WhatsAppController = require("../controllers/WhatsAppController");
const AdminLoginController = require('../controllers/AdminLoginController');
const DevelopmentServicesController = require("../controllers/DevelopmentServicesController");
const DevelopmentServicesDetailsController = require("../controllers/DevelopmentServicesDetailsController");
const GoogleLocationController = require("../controllers/GoogleLocationController");

const express = require("express");
const path = require("path");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/photos");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

const upload = multer({
    storage: storage,
});

// Define Your Middleware Functions
const MiddlewareFunction = (req,res,next)=>{
     // Your middleware logic here
  console.log('Middleware executed for every route');
  // Call next() to pass control to the next middleware or route handler
  next();
}
router.use(MiddlewareFunction)

// Admin Login section
router.post('/adminlogin', MiddlewareFunction,AdminLoginController.CreateadminLogin);
router.post("/adminlogin/login",MiddlewareFunction, AdminLoginController.Login)

//   This is Award Section Router
router.post("/Award/post",MiddlewareFunction, upload.single("images"), AwardController.CreateAward)
router.get("/Award/get",MiddlewareFunction, AwardController.GetAward)
router.get("/Award/getById/:_id",MiddlewareFunction, AwardController.GetAwardById)
router.delete("/Award/delete/:_id",MiddlewareFunction, AwardController.DeleteAward)
router.put("/Award/update/:_id",MiddlewareFunction, upload.single("images"), AwardController.EditAward)

// All portFolios Section Router
router.post("/allportfolios/post",MiddlewareFunction, upload.single("images"), AllPortFoliosController.CreateAllPortFolios)
router.get("/allportfolios/get",MiddlewareFunction, AllPortFoliosController.GetAllPortFolios)
router.get("/allportfolios/getById/:_id",MiddlewareFunction, AllPortFoliosController.GetAllPortFoliosById)
router.delete("/allportfolios/delete/:_id",MiddlewareFunction, AllPortFoliosController.DeleteAllPortFolios)
router.put("/allportfolios/update/:_id",MiddlewareFunction, upload.single("images"), AllPortFoliosController.EditAllPortFolios)

//Blog Section Router
router.post("/Blog/post",MiddlewareFunction, upload.single("images"), BlogController.CreateBlog);
router.get("/Blog/get",MiddlewareFunction, BlogController.GetBlog);
router.delete("/Blog/delete/:_id",MiddlewareFunction, BlogController.DeleteBlog);
router.get("/Blog/getBlogDetails/:_id",MiddlewareFunction, BlogController.GetBlogDetails);
router.put("/Blog/update/:_id",MiddlewareFunction, upload.single("images"), BlogController.EditBlog);

// BrandingProjectsRouter Section here
router.post("/brandingproject/post",MiddlewareFunction, upload.single("images"), BrandingProjectsController.CreateBrandingProjects);
router.get("/brandingproject/get",MiddlewareFunction, BrandingProjectsController.GetBrandingProjects);
router.get("/brandingproject/getById/:_id",MiddlewareFunction, BrandingProjectsController.GetBrandingProjectsById);
router.delete("/brandingproject/delete/:_id",MiddlewareFunction, BrandingProjectsController.DeleteBrandingProjects);
router.put("/brandingproject/update/:_id",MiddlewareFunction, upload.single("images"), BrandingProjectsController.EditBrandingProjects);

// CaseStudy Section here
router.post('/CaseStudy/post',MiddlewareFunction, upload.single('images'), CaseStudyController.CreateCaseStudy);
router.get('/CaseStudy/get',MiddlewareFunction, CaseStudyController.GetCaseStudy);
router.delete('/CaseStudy/delete/:_id',MiddlewareFunction, CaseStudyController.DeleteCaseStudy);
router.get('/CaseStudy/getById/:_id',MiddlewareFunction, CaseStudyController.GetCaseStudyById);
router.put('/CaseStudy/update/:_id',MiddlewareFunction, upload.single('images'), CaseStudyController.EditCaseStudy);

// Client Section here
router.post("/client/post",MiddlewareFunction, ClientControllers.CreateClientReview);
router.get("/client/get",MiddlewareFunction, ClientControllers.GetClientReview);
router.delete("/client/delete/:_id",MiddlewareFunction, ClientControllers.DeleteClientReview);
router.get("/client/getById/:_id",MiddlewareFunction, ClientControllers.GetClientReviewById);
router.put("/client/update/:_id",MiddlewareFunction, ClientControllers.UpdateClientReview);

// ContactForm Section here
router.post("/contactform/post",MiddlewareFunction, ContactFormController.CreateContactForm)

// Helping Form section here
router.post("/HelpingForm/post",MiddlewareFunction, HelpingFormController.createHelpingForm);
router.get("/HelpingForm/get",MiddlewareFunction, HelpingFormController.GetHelpingForm);
router.get("/HelpingForm/getById/:_id",MiddlewareFunction, HelpingFormController.GetHelpingFormById);
router.delete("/HelpingForm/delete/:_id",MiddlewareFunction, HelpingFormController.DeleteHelpingForm);

// Logo section here
router.post("/logo/post",MiddlewareFunction, upload.single("logo"), LogoController.CreateLogo);
router.get("/logo/get",MiddlewareFunction, LogoController.GetLogo);

// Messagebox section here
router.post("/messagebox/post",MiddlewareFunction, MessageboxController.CreateMessageBox);

// MobilePortFolios section here
router.post('/MobilePortFolios/post',MiddlewareFunction, upload.single('images'), MobilePortFoliosController.CreateMobilePortFolios);
router.get('/MobilePortFolios/get',MiddlewareFunction, MobilePortFoliosController.GetMobilePortFolios);
router.get('/MobilePortFolios/getById/:_id',MiddlewareFunction, MobilePortFoliosController.GetMobilePortFoliosById);
router.delete('/MobilePortFolios/delete/:_id',MiddlewareFunction, MobilePortFoliosController.DeleteMobilePortFolios);
router.put('/MobilePortFolios/update/:_id',MiddlewareFunction, upload.single('images'), MobilePortFoliosController.UpdateMobilePortFolios);

// OurServicesGraphics section here
router.post("/OurServicesGraphics/post",MiddlewareFunction, upload.single("images"), OurServicesGraphicsController.CreateOurServicesGraphicses)
router.get("/OurServicesGraphics/get",MiddlewareFunction, OurServicesGraphicsController.GetOurServicesGraphicses)
router.get("/OurServicesGraphics/getById/:_id",MiddlewareFunction, OurServicesGraphicsController.GetOurServicesGraphicsesById)
router.delete("/OurServicesGraphics/delete/:_id",MiddlewareFunction, OurServicesGraphicsController.DeleteServicesGraphics)
router.put("/OurServicesGraphics/update/:_id",MiddlewareFunction, upload.single("images"), OurServicesGraphicsController.EditOurServicesGraphics);

// OurServicesWebDesign section here
router.post("/OurServicesWebDesign/post",MiddlewareFunction, upload.single("images"), OurServicesWebDesignRouter.CreateOurServicesWebDesign);
router.get("/OurServicesWebDesign/get",MiddlewareFunction, OurServicesWebDesignRouter.GetOurServicesWebDesign);
router.get("/OurServicesWebDesign/getById/:_id",MiddlewareFunction, upload.single("images"), OurServicesWebDesignRouter.GetOurServicesWebDesignById);
router.delete("/OurServicesWebDesign/delete/:_id",MiddlewareFunction, OurServicesWebDesignRouter.DeleteOurServicesWebDesign);
router.put("/OurServicesWebDesign/update/:_id",MiddlewareFunction, upload.single("images"), OurServicesWebDesignRouter.EditOurServicesWebDesign);

// OurServicesEcommerce section here
router.post("/OurServicesEcommerce/post",MiddlewareFunction, upload.single("images"), OurServicesEcommerceController.CreateOurServicesEcommerce);
router.get("/OurServicesEcommerce/get",MiddlewareFunction, OurServicesEcommerceController.GetOurServicesEcommerce);
router.get("/OurServicesEcommerce/getById/:_id",MiddlewareFunction, upload.single("images"), OurServicesEcommerceController.GetOurServicesEcommerceById);
router.delete("/OurServicesEcommerce/delete/:_id",MiddlewareFunction, OurServicesEcommerceController.DeleteOurServicesEcommerce);
router.put("/OurServicesEcommerce/update/:_id",MiddlewareFunction, upload.single("images"), OurServicesEcommerceController.EditOurServicesEcommerce);

// OurServicesMobile section here
router.post("/OurServicesMobile/post",MiddlewareFunction, upload.single("images"), OurServicesMobileController.CreateOurServicesMobile);
router.get("/OurServicesMobile/get",MiddlewareFunction, OurServicesMobileController.GetOurServicesMobile);
router.get("/OurServicesMobile/getById/:_id",MiddlewareFunction, upload.single("images"), OurServicesMobileController.GetOurServicesMobileById);
router.delete("/OurServicesMobile/delete/:_id",MiddlewareFunction, OurServicesMobileController.DeleteOurServicesMobile);
router.put("/OurServicesMobile/update/:_id",MiddlewareFunction, upload.single("images"), OurServicesMobileController.EditOurServicesMobile);

// OurServicesPPC section here
router.post("/OurServicesPPC/post",MiddlewareFunction, upload.single("images"), OurServicesPPCController.CreateOurServicesPPC);
router.get("/OurServicesPPC/get",MiddlewareFunction, OurServicesPPCController.GetOurServicesPPC);
router.get("/OurServicesPPC/getById/:_id",MiddlewareFunction, upload.single("images"), OurServicesPPCController.GetOurServicesPPCById);
router.delete("/OurServicesPPC/delete/:_id",MiddlewareFunction, OurServicesPPCController.DeleteOurServicesPPC);
router.put("/OurServicesPPC/update/:_id",MiddlewareFunction, upload.single("images"), OurServicesPPCController.EditOurServicesPPC);

// Development Services section here
router.post("/DevelopmentServices/post",MiddlewareFunction, upload.single("images"), DevelopmentServicesController.CreateDevelopmentServices);
router.get("/DevelopmentServices/get",MiddlewareFunction, DevelopmentServicesController.GetDevelopmentServices);
router.get("/DevelopmentServices/getById/:_id",MiddlewareFunction, upload.single("images"),
 DevelopmentServicesController.GetDevelopmentServicesById);
router.delete("/DevelopmentServices/delete/:_id",MiddlewareFunction, DevelopmentServicesController.DeleteDevelopmentServices);
router.put("/DevelopmentServices/update/:_id",MiddlewareFunction, upload.single("images"), DevelopmentServicesController.EditDevelopmentServices);

// Development Services section here
router.post("/DevelopmentServicesDeatils/post",MiddlewareFunction, upload.single("images"), DevelopmentServicesDetailsController.CreateDevelopmentServicesDetails);
router.get("/DevelopmentServicesDeatils/get",MiddlewareFunction, DevelopmentServicesDetailsController.GetDevelopmentServicesDetails);
router.get("/DevelopmentServicesDeatils/getById/:_id",MiddlewareFunction, upload.single("images"),
 DevelopmentServicesDetailsController.GetDevelopmentServicesDetailsById);
router.delete("/DevelopmentServicesDeatils/delete/:_id",MiddlewareFunction, DevelopmentServicesDetailsController.DeleteDevelopmentServicesDetails);
router.put("/DevelopmentServicesDeatils/update/:_id",MiddlewareFunction, upload.single("images"), DevelopmentServicesDetailsController.EditDevelopmentServicesDetails);

// Partner section here
router.post("/partner/post",MiddlewareFunction, upload.single("images"), PartnerController.CreatePartner);
router.get("/partner/get",MiddlewareFunction, PartnerController.GetPartner);
router.delete("/partner/delete/:_id",MiddlewareFunction, PartnerController.deletePartner);
router.get("/partner/getById/:_id",MiddlewareFunction, PartnerController.GetPartnerById);
router.put("/partner/update/:_id",MiddlewareFunction, upload.single("images"), PartnerController.UpdatePartner);

// PortFolios section here
router.post("/portfolios/post",MiddlewareFunction, upload.single("images"), PortFoliosController.CreatePortFolios);
router.get("/portfolios/get",MiddlewareFunction, PortFoliosController.GetPortFolios);
router.delete("/portfolios/delete/:_id",MiddlewareFunction, PortFoliosController.DeletePortFolios);
router.get("/portfolios/getById/:_id",MiddlewareFunction, PortFoliosController.GetPortFoliosById);
router.put("/portfolios/update/:_id",MiddlewareFunction, upload.single("images"), PortFoliosController.UpdatePortFolios);

// SEO section here
router.post("/SEO/post",MiddlewareFunction, upload.single("images"), SEOController.CreateSEO)
router.get("/SEO/get",MiddlewareFunction, SEOController.GetSEO)
router.get("/SEO/getById/:_id",MiddlewareFunction, SEOController.GetSEOById)
router.delete("/SEO/delete/:_id",MiddlewareFunction, SEOController.DeleteSEO)
router.put("/SEO/update/:_id",MiddlewareFunction, upload.single("images"), SEOController.EditSEO)

// Slider section here
router.post("/slider/post",MiddlewareFunction, upload.single("images"), SliderControllers.CreateSlider);
router.get("/slider/get",MiddlewareFunction, SliderControllers.GetImagesSlider);
router.get("/slider/getById/:_id",MiddlewareFunction, SliderControllers.GetImagesSliderById);
router.delete("/slider/delete/:_id",MiddlewareFunction, SliderControllers.DeleteSlider);
router.put("/slider/update/:_id",MiddlewareFunction, upload.single("images"), SliderControllers.EditSlider);

// SocialMediaLink section here
router.post("/socialmedia/post",MiddlewareFunction, SocialMediaLinkController.CreateSocialMediaLink);
router.get("/socialmedia/get",MiddlewareFunction, SocialMediaLinkController.GetSocialMediaLink);
router.get("/socialmedia/getById/:_id",MiddlewareFunction, SocialMediaLinkController.GetSocialMediaLinkGetById);
router.delete("/socialmedia/delete/:_id",MiddlewareFunction, SocialMediaLinkController.DeleteSocialMediaLink);
router.put("/socialmedia/update/:_id",MiddlewareFunction, SocialMediaLinkController.EditSocialMediaLink);

// Team section here
router.post("/",MiddlewareFunction, upload.single("images"), TeamController.CreateTeam);
router.get("/",MiddlewareFunction, TeamController.GetTeam);

// Technology section here
router.post("/technology/post",MiddlewareFunction, upload.single("images"), CreateTechnology.CreateTechnology);
router.get("/technology/get",MiddlewareFunction, upload.single("images"), CreateTechnology.GetTechnology);
router.delete("/technology/delete/:_id",MiddlewareFunction, CreateTechnology.DeleteTechnology);
router.get("/technology/getById/:_id",MiddlewareFunction, CreateTechnology.GetTechnologyById);
router.put("/technology/update/:_id",MiddlewareFunction, upload.single("images"), CreateTechnology.EditTechnology);

// WebPortFolios section here
router.post("/webportfolios/post",MiddlewareFunction, upload.single("images"), WebPortFoliosController.CreateWebPortFolios);
router.get("/webportfolios/get",MiddlewareFunction, WebPortFoliosController.GetWebPortFolios);
router.get("/webportfolios/getById/:_id",MiddlewareFunction, WebPortFoliosController.GetWebPortFoliosById);
router.delete("/webportfolios/delete/:_id",MiddlewareFunction, WebPortFoliosController.DeleteWebPortFolios);
router.put("/webportfolios/update/:_id",MiddlewareFunction, upload.single("images"), WebPortFoliosController.EditWebPortFolios);

//  WhatsApp section here
router.post("/whatsapp/post",MiddlewareFunction, WhatsAppController.CraeteWhatsApp);
router.get("/whatsapp/get",MiddlewareFunction, WhatsAppController.GetWhatsApp);

//  Google Location 
router.post("/GoogleLocation/post",MiddlewareFunction,GoogleLocationController.validateApiKey,
 GoogleLocationController.createGoogleLocation);
router.get("/GoogleLocation/get",MiddlewareFunction,GoogleLocationController.GetGoogleLocation);


module.exports = router
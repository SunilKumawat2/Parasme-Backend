const TeamModals = require("../models/TeamModals");

const CreateTeam = async (req, res) => {
  try {
    const { name, technology } = req.body;
    const images = req.file ? req.file.filename : null;
    const newteam = new TeamModals({
      name,
      technology,
      images,
    });
    await newteam.save();
    res
      .status(201)
      .json({ status: 201, message: "Successfuly add Team", team: newteam });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, message: "Error Occur add Team", error });
  }
};

const GetTeam = async (req,res)=>{
   try{
    const teams = await TeamModals.find();
    if(teams.length > 0){
        const teamData = teams.map((team) => ({
            name: team.name,
            technology: team.technology,
            images: team.images,
          }));
          return res.status(200).json({status:200,message:"successfully fetch the team data",team:teamData})
    }else{
        return res.status(404).json({status:404,message:"No Team Memeber found"})
    }
   }catch(error){
    return res.status(500).json({status:500,message:"An error occurred while retrieving the Team memeber"})
   }
}
module.exports = { CreateTeam,GetTeam };

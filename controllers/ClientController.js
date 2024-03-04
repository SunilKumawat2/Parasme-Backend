const ClientModal = require("../models/ClientReview");

const CreateClientReview = async (req, res) => {
  try {
    const { name, technology, paragraph } = req.body;

    const newClient = new ClientModal({
      name,
      technology,
      paragraph,
    });
    await newClient.save();
    res.status(201).json({
      status: 201,
      message: "Successfully Add Client Review",
      client: newClient,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, message: "Error Occur Add Client Review" });
  }
};

const GetClientReview = async (req, res) => {
  try {
    const clients = await ClientModal.find(); // Retrieve all documents
    if (clients.length > 0) {
      // Check if any documents were found
      const clientData = clients.map((client) => ({
        _id: client._id,
        name: client.name,
        technology: client.technology,
        paragraph: client.paragraph,
      }));
      return res.status(200).json({
        status: 200,
        message: "Successfully retrieved the client reviews",
        clients: clientData,
      });
    } else {
      return res.status(404).json({
        status: 404,
        message: "No client reviews found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "An error occurred while retrieving the client reviews",
    });
  }
};

const DeleteClientReview = async (req, res) => {
  try {
    const _id = req.params._id;
    const client = await ClientModal.findByIdAndDelete(_id);
    if (!client) {
      return res.status(404).json({
        status: 404,
        message: "Client not found",
      });
    }
    return res.status(200).json({ status: 200, message: "Successfully Delete Client reviwe", data: client })
  } catch (error) {
    return res.status(500).json({ status: 500, message: "Server Side error Delete Client reviwe" })

  }

}

const GetClientReviewById = async (req, res) => {
  try {
    const _id = req.params._id;
    const client = await ClientModal.findById(_id);
    if (!client) {
      return res.status(404).json({
        status: 404,
        message: "Client not found",
      });
    }
    const ClientData = {
      _id: client._id,
      name: client.name,
      technology: client.technology,
      paragraph: client.paragraph,
    }
    return res.status(200).json({ status: 200, message: "Successfully Get Client reviwe", data: ClientData })
  } catch (error) {
    return res.status(500).json({ status: 500, message: "Server Side error Get Client reviwe" })

  }
}

const UpdateClientReview = async (req, res) => {
  try {
    const _id = req.params._id;
    const { name, technology, paragraph } = req.body;

    const clientUpdate = {
      name: name,
      technology: technology,
      paragraph: paragraph
    };

    const client = await ClientModal.findByIdAndUpdate(_id, clientUpdate, { new: true });

    if (!client) {
      return res.status(404).json({ status: 404, message: "Client not found" });
    }

    return res.status(200).json({ status: 200, message: "Successfully Update Client review", data: client });
  } catch (error) {
    return res.status(500).json({ status: 500, message: "Server Side error Update Client review", error: error.message });
  }
};


module.exports = { CreateClientReview, GetClientReview, DeleteClientReview, GetClientReviewById, UpdateClientReview };

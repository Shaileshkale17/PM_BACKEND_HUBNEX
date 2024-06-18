import { FormDataModel } from "../Models/FormData.js";
const FromData = async (req, res) => {
  // To post / insert data into database

  const { addrequirement, notes } = req.body;
  FormDataModel.findOne({ addrequirement: addrequirement }).then((user) => {
    if (user) {
      res.json("Already entered");
    } else {
      FormDataModel.create(req.body)
        .then((log_reg_form) => res.json(log_reg_form))
        .catch((err) => res.json(err));
    }
  });
};

export { FromData };

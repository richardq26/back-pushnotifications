var axios = require("axios");
exports.push = async (req, res) => {
  //   var tokens = req.body.tokens;
  console.log(req.body.tokens)
 
  try {
    var resp = await axios.post(
      "https://fcm.googleapis.com/fcm/send",
      {
        notification: {
          body: req.body.message,
          title: req.body.title,
        },
        priority: "high",
        data: {},
        registration_ids: req.body.tokens
      },
      {
        headers: { Authorization: process.env.TOKEN },
      }
    );
    
  } catch (err) {
    console.log(err);
    res.json({ err });
  }

  res.json({ msg: "Notificacion enviada" });
};

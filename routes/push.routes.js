const { Router } = require("express");
const { push } = require("../controller/push.controller");
const router = Router();
router.post("/push", push);
module.exports=router;
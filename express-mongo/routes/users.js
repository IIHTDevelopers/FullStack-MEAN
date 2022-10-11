var express = require('express'); 
var router = express.Router(); 

var usersService = require("../services/users"); 

router.get("/", usersService.getAllUsers)
router.get("/:name", usersService.getUserByName)
router.post("/", usersService.createUser)
router.delete("/:index", usersService.deleteUserByIndex)
router.put("/:index", usersService.updateUserByIndex)

module.exports = router; 
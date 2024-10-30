const express = require("express")
const router = express.Router()
const blogSchema = require("../schemas/blogSchema")

// Get All blogs
router.get("/", async(req, res) => {

})

// Get Signle Blog By Id
router.get("/:id", async(req, res) => {

})

// Update Signle Blog By Id
router.put("/:id", async(req, res) => {

})

// Delete Signle Blog By Id
router.delete("/:id", async(req, res) => {

})

module.exports = router; 
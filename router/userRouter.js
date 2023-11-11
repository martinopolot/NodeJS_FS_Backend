const express = require('express');
const router = express.Router();

// localhost:3001/users/
router.get("/", function (req, res) {
    res.status(200).json({
        message: 'Successful - GET',
        metadata: {
            hostname:req.hostname,
            method:req.method,
        },
    });
});
// localhost:3001/users/34
router.get("/:id", (req, res, next) => {
    res.status(200).json({
        message: 'Successful - GET by ID',
        metadata: {
            id:req.params.id,
            hostname:req.hostname,
            method:req.method,
        }
    })
})

// localhost:3001/users/
router.post("/", function (req, res) {
    const name = req.body.name;
    res.status(201).json({
        message: 'Successful - POST',
        metadata: {
            name: name,
            hostname:req.hostname,
            method:req.method,
        },
    });
});
// localhost:3001/users/34
router.put("/:id", (req, res, next) => {
    res.status(200).json({
        message: 'Successful - PUT by ID',
        metadata: {
            id:req.params.id,
            hostname:req.hostname,
            method:req.method,
        }
    })
});

// localhost:3001/users/
router.delete("/:id", function (req, res, next) {
    res.status(200).json({
        message: 'Successful - DELETE by ID',
        metadata: {
            id:req.params.id,
            hostname:req.hostname,
            method:req.method,
        },
    });
});

module.exports = router;
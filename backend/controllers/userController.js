const db = require("../config/db");

exports.createUser = async (req, res) => {

    try {

        const { name, email, phone } = req.body;

        await db.query(
            "INSERT INTO users(name,email,phone) VALUES(?,?,?)",
            [name, email, phone]
        );

        res.status(201).json({
            message: "User Added Successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

exports.getUsers = async (req, res) => {

    try {

        const [rows] = await db.query("SELECT * FROM users ORDER BY id DESC");

        res.json(rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
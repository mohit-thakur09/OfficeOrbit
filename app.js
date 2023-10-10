const express = require("express");
const app = express();
const mysql = require("mysql");

app.set("view-engine", "ejs");
app.use(express.json());
app.use(express.static("views"));
app.use(express.urlencoded({ extended: false }));

const connection = mysql.createConnection({
    user: "root",
    password: "root1213",
    database: "companydb",
    host: "localhost"
})

connection.connect((err) => {
    if (err) {
        console.log(`Error : Connection can not Established.`)
        throw err;
    }
    console.log(`Success : Server connection established`)
})

const getId = (request, response, next) => {
    resp_obj = {
        status: true,
        error: false,
        data: null,
        Details: {}
    }
    connection.query("select id from emp;", (err, id_list) => {
        if (err) {
            resp_obj.status = false;
            resp_obj.error = "Server Error";
            response.status(500).render("pages/landing.ejs", resp_obj);
            return;
        }
        resp_obj.data = id_list;
        next();
    })
}

app.get("/", (request, response) => {
    connection.query("select * from emp", (err, result) => {
        if (err) {
            response.status(500).send("Error: Data could not be fetched!")
            return;
        }
        response.render("pages/empDetails.ejs", { result: result })
    })
})

app.get("/updateuser", getId, (request, response) => {
    response.render("pages/landing.ejs", resp_obj);
})

app.post("/updateuser", (request, response) => {
    const uid = Number(request.body.emp_id);
    connection.query("select * from emp where id=?;", [uid], (err, user_data) => {
        if (err) {
            response.status(500).render("pages/landing.ejs", { status: false, error: "Server Error" });
            return;
        }
        let { id, name, age, salary } = user_data[0];
        resp_obj.Details = { id, name, age, salary }
        response.render("pages/landing.ejs", resp_obj);
    })
})

app.post("/updateAck/:id", (request, response) => {
    const id = request.params.id;
    const { empname, empage, empsal } = request.body;
    connection.query("update emp set name=?,age=?,salary=? where id = ?", [empname, empage, empsal, id], (err, user_data) => {
        if (err) {
            response.status(500).render("pages/updateSuccess.ejs", { status: false, error: "Server Error" });
            return;
        }
        response.render("pages/updateSuccess.ejs", { status: "update", id: id });
    })
})

app.get("/addEmp", getId, (request, response) => {
    response.render("pages/addUser.ejs");
})

app.post("/addEmp", (request, response) => {
    const id = resp_obj.data[resp_obj.data.length - 1].id + 1;
    const { empname, empage, empsal } = request.body;
    connection.query("insert into emp values (?,?,?,?)", [id, empname, empage, empsal], (err, user_data) => {
        if (err) {
            response.status(500).render("pages/updateSuccess.ejs", { status: false, error: "Server Error" });
            return;
        }
        response.render("pages/updateSuccess.ejs", { status: "NewUser", id: id, error: false });
    })
})

const server = app.listen(9000, () => {
    console.log(`Server started at http://localhost:${server.address().port}`)
})
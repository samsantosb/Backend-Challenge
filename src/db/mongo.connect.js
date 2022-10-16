const { connection, connections, connect } = require("mongoose");
require('dotenv').config();

const mongo = process.env.MONGO;

async function mongoConnect() {
    //padrões de observação do processo de conexão
    //utilizando de artefatos do mongoose
    connection
        .on("error", (error) => {
            console.log("ERROR: Connection to MongoDB failed", error);
        })

        .on("close", () => {
            console.log("Connection to MongoDB ended");
        })

        .once("open", () => {
            const infos = connections;

            infos.map((info) =>
                console.log(
                    `Connected to ${info.host}:${info.port}/${info.name} mongo Database`
                )
            );
        });

    connect(mongo);
}

//create a function to disconnect from the database
function mongoDisconnect() {
    if (!connection) {
        return;
    }
    connection.close();
}

module.exports = { mongoConnect, mongoDisconnect };
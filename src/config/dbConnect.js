import mongoose from "mongoose"

mongoose.connect("mongodb+srv://app:123@cluster0.q4jlx3d.mongodb.net/&appName=alura-node");

let db = mongoose.connection;

export default db;
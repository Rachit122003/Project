import mongoose from "mongoose";

// 1. Define the schema

const nodeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
},
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Node = mongoose.model("Node", nodeSchema);

export default Node;
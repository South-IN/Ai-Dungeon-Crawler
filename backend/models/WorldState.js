import mongoose from "mongoose";

const worldSchema = new mongoose.Schema(
  {
    state: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

const WorldState = mongoose.model("WorldState", worldSchema);

export default WorldState;

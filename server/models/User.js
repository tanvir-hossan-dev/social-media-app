const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Fist name is required"],
      min: [3, "Minimum 3 latter"],
      max: [8, "Maximum 8 latter"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      text: true,
    },
    userName: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      text: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    picture: {
      type: String,
      trim: true,
    },
    cover: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      trim: true,
    },
    bYear: {
      type: Number,
      required: [true, "Birth Year is required"],
    },
    bMonth: {
      type: Number,
      required: [true, "Birth Month is required"],
    },
    bDay: {
      type: Number,
      required: [true, "Birth Day is required"],
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    requests: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },
      job: {
        type: String,
      },
      workPlace: {
        type: String,
      },
      highSchool: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      homeTown: {
        type: String,
      },
      reletionship: {
        type: String,
        enum: ["Single", "In a relationship", "Married"],
      },
      instragram: {
        type: String,
      },
    },
    savePost: [
      {
        post: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Post",
        },
        saveAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

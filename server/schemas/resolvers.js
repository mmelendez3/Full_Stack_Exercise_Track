const { User, Exercise } = require("../models");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id }).select("-__v -password").populate("exercises");
				return userData;
			}
			throw new AuthenticationError("Not logged in");
		},
		//   exercises: async (parent, { username }) => {
		//     const params = username ? { username } : {};
		//     return Exercise.find(params).sort({ createdAt: -1 });
		//   },

		//get exercise by ID
		exercise: async (parent, { _id }) => {
			return Exercise.findOne({ _id });
		},
	},

	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);
			return { token, user };
		},
		
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });
			if (!user) {
				throw new AuthenticationError("Incorrect credentials");
			}
			const correctPw = await user.isCorrectPassword(password);
			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}
			const token = signToken(user);
			return { token, user };
		},
		
		addExercise: async (parent, args, context) => {
			if (context.user) {
				const exercise = await Exercise.create({ ...args, username: context.user.username });
				const updatedUser = await User.findByIdAndUpdate({ _id: context.user._id }, { $push: { exercises: exercise._id } }, { new: true });
				return updatedUser;
			}
			throw new AuthenticationError("You need to be logged in!");
		},

		//Deletes Exercise data of exercise with _id, also updates user by removing _id from its exercise array
		removeExercise: async (parent, args, context) => {
			if (context.user) {
				//Updates User by removing the exercise ID from the exercise array property
				const updatedUser = await User.findOneAndUpdate({ _id: context.user._id }, { $pull: { savedExercises: { exerciseId: args._id } } }, { new: true });

				//Removes exercise
				await Exercise.findByIdAndRemove({ _id: args._id });
				return updatedUser;
			}
			throw new AuthenticationError("You need to be logged in!");
		},
	},
};
  
  module.exports = resolvers;
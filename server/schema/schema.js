const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLSchema, GraphQLID } = graphql;

const User = require('./../models/user');
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    })
});
// const AuthorType = new GraphQLObjectType({
//     name: 'Author',
//     fields: () => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         age: { type: GraphQLInt },
//         books: {
//             type: new GraphQLList(BookType),
//             resolve(parent, args) {
//                 return Book.find({ authorid: parent.id })
//             }
//         }
//     })
// });
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: new GraphQLList(UserType),
            args: { username: { type: GraphQLString }, password: { type: GraphQLString } },
            resolve(parent, args) {
                return User.find({ username: args.username, password: args.password });
            }
        },
        // author: {
        //     type: AuthorType,
        //     args: { id: { type: GraphQLID } },
        //     resolve(parent, args) {
        //         return Author.findById(args.id);
        //     }
        // },
        // books: {
        //     type: new GraphQLList(BookType),
        //     resolve(parent, args) {
        //         return Book.find({});
        //     }
        // },
        // authors: {
        //     type: new GraphQLList(BookType),
        //     resolve(parent, args) {
        //         return Author.find({});
        //     }
        // }
    }
})
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                username: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve(parent, args) {
                let user = new User({
                    name: args.name,
                    username: args.username,
                    password: args.password
                });
                return user.save();
            }
        },
        // addBook: {
        //     type: BookType,
        //     args: {
        //         name: { type: GraphQLString },
        //         genre: { type: GraphQLString },
        //         authorid: { type: GraphQLString }
        //     },
        //     resolve(parent, args) {
        //         let book = new Book({
        //             name: args.name,
        //             genre: args.genre,
        //             authorid: args.authorid
        //         })
        //         return book.save();
        //     }
        // }

    }
})
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
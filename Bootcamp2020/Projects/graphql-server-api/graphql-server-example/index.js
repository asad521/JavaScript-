const { ApolloServer, gql } = require("apollo-server");

let students = [
  {
    id: "1",
    name: "asad",
    email: "asad@yahoo.com",
    age: "23",
  },
  {
    id: "2",
    name: "ali",
    email: "ali@yahoo.com",
    age: "24",
  },
  { id: "3", name: "khan", email: "khan@yahoo.com", age: "25" },
];

//resolver .when query come,this resovler will run

const resolvers = {
  Query: {
    students: () => students,
  },
  Mutation: {
    addStudent: (_, {input} ) => {
      console.log(input);
      let newstudent= {
         id:input.id,name:input.age,email:input.email,age:input.age}
      students.push(newstudent)
      return newstudent
    }
  }
};

const typeDefs = gql`
  type Student {
      id:Int
    name: String
    email: String
    age: Int
  }

 
  type Query {
    students: [Student]
  }
  input StdInput {
    id:Int
    name: String
    email: String
    age: Int
  }
  type Mutation {
    addStudent(input : StdInput) : Student
  }
`;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

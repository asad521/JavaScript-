import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
const GET_STUDENTS = gql`
  query GetAllStudents {
    students {
      id
      name
      age
      email
    }
  }
`;
const ADD_STUDENT = gql`
  mutation AddTodo($id: Int!, $name: String!, $email: String!, $age: Int!) {
    addStudent(
      input: { id: $id, name: $name, age: $age, email: $email} 
      ) {
      id
      name
    }
  }
`;
export const Students = () => {
  const { loading, error, data } = useQuery(GET_STUDENTS);
  const [addStd] = useMutation(ADD_STUDENT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { students } = data;
  // console.log(students)
  return (
    <div>
      <table border="2">
        <thead>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tr>
        </thead>
        {students.map((student) => {
          return (
            <tbody>
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.email}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <button
        onClick={(e) => {
          addStd({ variables: { id:34,name:"234",email:"2342@YAHOO.COM",age:34} });
        }}
      >
        Add Students
      </button>
    </div>
  );
};

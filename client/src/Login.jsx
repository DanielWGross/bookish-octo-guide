import React from "react";
import { useMutation, gql } from "@apollo/client";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginMutation] = useMutation(LOGIN);

  async function handleOnSubmit(event) {
    event.preventDefault();

    const data = await loginMutation({
      variables: {
        email,
        password,
      },
    });
    console.log("🚀 ~ file: Login.jsx:26 ~ handleOnSubmit ~ data:", data);
    console.log({ email, password });
    setEmail("");
    setPassword("");
  }

  function handleEmailOnChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordOnChange(event) {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailOnChange}
      />
      <label htmlFor="email">Enter Your Email</label>
      <br />
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordOnChange}
      />
      <label htmlFor="password">Enter Your Password</label>
      <br />
      <button type="submit">Submit Your Stuff</button>
    </form>
  );
};

export default Login;

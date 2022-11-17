import React from "react";
// import Form from "./page/Form";
import Todo from "./page/Todo";
import { BodyContainer, FormContainer } from "./styles/styles";

function App(): JSX.Element {
  return (
<BodyContainer>
<FormContainer>
      {/* <Form /> */}
      <Todo/>
   </FormContainer>
</BodyContainer>
  );
}

export default App;

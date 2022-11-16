import React from "react";
import Form from "./page/Form";
import { BodyContainer, FormContainer } from "./styles/styles";

function App(): JSX.Element {
  return (
<BodyContainer>
<FormContainer>
      <Form />
   </FormContainer>
</BodyContainer>
  );
}

export default App;

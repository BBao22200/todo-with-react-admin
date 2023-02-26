import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import ListTodo from "./components/ListTodo";
import EditTodo from "./components/EditTodo";
import CreateTodo from "./components/CreateTodo";

function App() {
  return (
    <Admin
      dataProvider={jsonServerProvider(`https://jsonplaceholder.typicode.com`)}
    >
      <Resource name="todos" list={ListTodo} edit={EditTodo} create={CreateTodo} />
    </Admin>
  );
}

export default App;

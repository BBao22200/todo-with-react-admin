import { Admin, Resource } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";

import ListTodo from "./components/ListTodo";
import EditTodo from "./components/EditTodo";
import CreateTodo from "./components/CreateTodo";
import dataProvider from "./custom/DataProvider";

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
    >
      <Resource name="todos" list={ListTodo} edit={EditTodo} create={CreateTodo} />
    </Admin>
  );
}

export default App;

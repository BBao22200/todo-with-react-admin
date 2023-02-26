import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EditButton,
  DeleteButton,
  TextInput,
} from "react-admin";


const Filters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

function TodoList() {
  return (
    <List filters={Filters}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <BooleanField source="completed" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
export default TodoList;

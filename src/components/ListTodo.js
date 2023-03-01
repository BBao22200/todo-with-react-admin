import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  TextInput,
  SearchInput
} from "react-admin";


const Filters = [
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="todos" source="todo" defaultValue="Hello, World!" />,
];

function TodoList() {
  return (
    <List filters={Filters} sort={{ field: 'id', order: 'ASC' }}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="todo" />
        <TextField source="priority" />
        <TextField source="category" />
        <TextField source="status" />
        <TextField source="dueDate" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
export default TodoList;

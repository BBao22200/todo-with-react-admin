import { Edit, SimpleForm, TextInput, BooleanInput } from "react-admin"

function EditTodos() {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="id" />
                <TextInput source="todo" />
                <TextInput source="priority" />
                <TextInput source="category" />
                <TextInput source="status" />
                <TextInput source="dueDate" />
            </SimpleForm>
        </Edit>
    )
}
export default EditTodos
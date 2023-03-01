import { Edit, SimpleForm, TextInput, SelectInput, DateInput } from "react-admin"
import { categories, priorities, statuses } from '../constants';

function EditTodos() {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="id" />
                <TextInput source="todo" />
                <SelectInput source="priority" choices={priorities} />
                <SelectInput source="category" choices={categories} />
                <SelectInput source="status" choices={statuses} />
                <DateInput source="dueDate" />
            </SimpleForm>
        </Edit>
    )
}
export default EditTodos
import { SimpleForm, TextInput, Create, SelectInput, DateInput } from "react-admin"
import { categories, priorities, statuses } from '../constants';


function CreateTodos() {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="id" />
                <TextInput source="todo" />
                <SelectInput source="priority" choices={priorities} />
                <SelectInput source="category" choices={categories} />
                <SelectInput source="status" choices={statuses} />
                <DateInput source="dueDate" />
            </SimpleForm>
        </Create>
    )
}
export default CreateTodos
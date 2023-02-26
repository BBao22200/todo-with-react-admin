import { Edit, SimpleForm, TextInput, BooleanInput } from "react-admin"

function CreateTodos() {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="id" />
                <TextInput source="title" />
                <BooleanInput source="completed"/>
            </SimpleForm>
        </Edit>
    )
} 
export default CreateTodos
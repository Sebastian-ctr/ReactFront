import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
    Create,
    DateField,
    FileField,
    FileInput, 
} from 'react-admin';

 const TextList = props => (
    <List{...props}>
        <Datagrid rowClick="edit">
            <TextField source="tittle" />
            <TextField source="text" />
            <DateField source="createdAt" />
        </Datagrid>
    </List>
)

export const TextEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="tittle" />
            <TextInput source="text" />
            <FileInput source="pdf" label="Related files" accept="application/pdf">
                <FileField source="pdf" title="title" />
            </FileInput>
        </SimpleForm>
    </Edit>
)

export const TextCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="tittle" />
            <TextInput source="text" />
            <FileInput source="pdf" label="Related files" accept="application/pdf">
                <FileField source="pdf" title="title" />
            </FileInput>
        </SimpleForm>
    </Create>
)



export default TextList;

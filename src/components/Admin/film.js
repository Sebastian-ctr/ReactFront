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



const FilmList = props => (
    <List{...props}>
        <Datagrid rowClick="edit">
            <TextField source="tittle" />
            <TextField source="url" />
            <TextField source="description" />
        </Datagrid>
    </List>
)

export const FilmEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="tittle" />
            <TextInput source="url" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
)

export const FilmCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="tittle" />
            <TextInput source="url" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
)

export default FilmList;
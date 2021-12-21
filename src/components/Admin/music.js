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



const MusicList = props => (
    <List{...props}>
        <Datagrid rowClick="edit">
            <TextField source="tittle" />
            <TextField source="url" />
            <TextField source="description" />
        </Datagrid>
    </List>
)

export const MusicEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="tittle" />
            <TextInput source="url" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
)

export const MusicCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="tittle" />
            <TextInput source="url" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
)

export default MusicList;
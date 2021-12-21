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



const ContactList = props => (
    <List{...props}>
        <Datagrid rowClick="edit">
            <TextField source="tittle" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="phoneNumber" />
        </Datagrid>
    </List>
)

export const ContactEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="tittle" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phoneNumber" />
        </SimpleForm>
    </Edit>
)

export const ContactCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="tittle" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phoneNumber" />
        </SimpleForm>
    </Create>
)

export default ContactList;
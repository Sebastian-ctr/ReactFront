import * as React from "react";
import { 
    Admin,
    Resource,
    ListGuesser,
 } from 'react-admin';
import jsonServerProvider from 'ra-data-simple-rest';


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com')

const AdminApp = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={ListGuesser} />
    </Admin>
);

export default AdminApp;

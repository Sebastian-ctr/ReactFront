import * as React from "react";
import { 
    fetchUtils,
    Admin,
    Resource,
    ListGuesser,
 } from 'react-admin';

import TextList, { TextEdit, TextCreate }  from "./text";
import MyDataProvider from "./dataProvider";




const AdminApp = () => (
    <Admin dataProvider={MyDataProvider}>
        <Resource name="text" list={TextList} edit={TextEdit} create={TextCreate} />
        <Resource name="home" list={ListGuesser} />
    </Admin>
);

export default AdminApp;

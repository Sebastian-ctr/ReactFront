import * as React from "react";
import { Admin } from 'react-admin';
import dataProvider from "./dataProvider";


function AdminApp () {
    return(
        <Admin dataProvider={dataProvider   }/>
    )
}

export default AdminApp;
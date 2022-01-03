import * as React from "react";
import { 
    fetchUtils,
    Admin,
    Resource,
    ListGuesser,
 } from 'react-admin';
import dataProvider from "./DataProvider";
import TextList, { TextEdit, TextCreate }  from "./text";
import ContactList, { ContactEdit, ContactCreate } from "./contact";
import FilmList, { FilmCreate, FilmEdit } from "./film";
import MusicList, { MusicCreate, MusicEdit } from "./music";




const AdminApp = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="text" list={TextList} edit={TextEdit} create={TextCreate} />
        <Resource name="contact" list={ContactList} edit={ContactEdit} create={ContactCreate} />
        <Resource name="film" list={FilmList} edit={FilmEdit} create={FilmCreate} />
        <Resource name="music" list={MusicList} edit={MusicEdit} create={MusicCreate} />
    </Admin>
);

export default AdminApp;

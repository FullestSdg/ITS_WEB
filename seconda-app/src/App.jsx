import { useState } from 'react'
import Saluto from './esercizi_agosto/Saluto';
import "./App.css"
import UserCrud from './user-crud-analyst/UserCrud'
import CardUtente from './esercizi_agosto/CardUtente';
import MenuRistorante from './esercizi_agosto/MenuRistorante';
import Termostato from './esercizi_agosto/Termostato';
import TodoApp from './todo/TodoApp';
import ProvaRoutes from './routes/ProvaRoutes';

function App() {

  return (
    <>
     <ProvaRoutes></ProvaRoutes>
     {/* <TodoApp> </TodoApp> */}
     {/* <Saluto></Saluto>
      <CardUtente nome ="Sergio" email = "sdgsergiodg20@gmail.com" imgUrl= "https://placehold.co/600x400/EEE/31343C"></CardUtente>
      <MenuRistorante></MenuRistorante>
      <Termostato></Termostato> */}
    </>
  );
}

export default App;

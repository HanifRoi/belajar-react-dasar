import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchFrom from "../form/SearchForm";
import SayHelloForm from "../form/SayHelloForm";
import Counter from "../form/Counter";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <TodoList/>
                <Table/>
                <AlertButton text="click me" message="this is a message"/>
                <MyButton text="smash me" onSmash={()=> alert("You smash me")}/>
                <MyButton text="hit me" onSmash={()=> alert("You hit me")}/>
                <Toolbar onClick={(e) => {
                    e.stopPropagation();
                    alert("You click toolbar")
                }}/>
                <SearchFrom/>
                <SayHelloForm/>
                <Counter/>
                <Counter/>
            </Container>
        </StrictMode>
    )
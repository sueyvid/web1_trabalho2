import React from "react";
import { useState, useEffect } from "react";
import ActionAreaCard from "./components/ActionAreaCard";

// To-do
// Criar card com botão para remoção
// Criar componente para agrupar vários cards (acho que o grid)
// Botão que faz uma requisição ao random_user e cria um card
// Criar um formulário para inserção de novos usuários

export default function App() {
    const [userData, setUserData] = useState("");
    const [serverData, setServerData] = useState("");

    useEffect(() => {
        fetch("https://random-data-api.com/api/users/random_user").then(function (response) {
            return response.json();
        }).then(function (data) {
            setUserData(data);
        })
        fetch("http://localhost:5000/posts/1").then(function (response) {
            return response.json();
        }).then(function (data) {
            setServerData(data);
            console.log(data);
        })
    }, [])

    return (
        <div>
            {userData && (
                <div>
                    <ActionAreaCard user={userData} />
                    <h1>Server Data</h1>
                    <p>Title: {serverData.title}</p>
                    <p>Author: {serverData.author}</p>
                </div>
            )}
        </div>
    )
}
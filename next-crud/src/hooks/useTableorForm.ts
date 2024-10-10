import { useState } from "react";

const useTableorForm = () => {

    const [visivel, setVisivel] = useState<"table" | "form">("table");

    const exibirTable = () => setVisivel('table')
    const exibirForm = () => setVisivel('form')

    return {
        formVisivel: visivel === 'form',
        tableVisivel: visivel === 'table',
        exibirTable,
        exibirForm
    }

}

export default useTableorForm
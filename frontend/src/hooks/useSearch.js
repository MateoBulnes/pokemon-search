import { useState } from "react";

const useSearch = (setPokemons, setIsLoading, setNotFound) => {
    
    const [search, setSearch] = useState("");

    const handleSearch = async () => {
        setPokemons([]);
        setNotFound(false);

        if (search.trim() === "") {
            setPokemons([]);
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(`http://localhost:8000/api/pokemon?search=${search}`);
            const data = await response.json();

            if (data.length === 0) {
                setNotFound(true);
            }

            setPokemons(data);
        } catch (error) {
            setPokemons([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteSearch = () => {
        setPokemons([]);
        setSearch('');
        setNotFound(false);
    }

    return {
        search,
        setSearch,
        handleSearch,
        handleDeleteSearch
    };
};

export default useSearch;

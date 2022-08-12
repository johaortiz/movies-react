import { useSearchQuery } from "../../hooks/useSearchQuery";
import { Cards } from "../Cards";
import { SearchBar } from "../SearchBar";

export function PrincipalPage() {

    const debouncedValue = useSearchQuery();

    return <>
        <SearchBar />
        <Cards key={debouncedValue} search={debouncedValue} />
    </>
}
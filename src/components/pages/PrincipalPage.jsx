import { useSearchQuery } from "../../hooks/useSearchQuery";
import { Cards } from "../Cards";

export function PrincipalPage() {

    const debouncedValue = useSearchQuery();

    return <>
        <Cards key={debouncedValue} search={debouncedValue}/>
    </>
}
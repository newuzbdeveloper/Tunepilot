import { useEffect, useState } from "react";
import { InputWrapper, NotFoundText, TableTitle, Wrapper } from "./styled";
import { search } from "Components/HomePage/Services/api";
import { toast } from "react-toastify";
import TracksTable from "Components/TracksTable";
import Input from "Components/UI/Input";
import SearchIcon from "Assets/Icons/search-input.svg";

function Search() {
  const [searchResult, setSearchResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await search(searchResult);
        setTracks(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (searchResult) loadData();
  }, [searchResult]);
  return (
    <Wrapper>
      <InputWrapper>
        <Input
          value={searchResult}
          onChange={(event) => setSearchResult(event.target.value)}
          startIcon={SearchIcon}
          placeholder="Search..."
        />
      </InputWrapper>
      {searchResult && (
        <div>
          <TableTitle>Results by: {searchResult}</TableTitle>
          {(isLoading || (!isLoading && tracks?.length > 0)) && (
            <TracksTable tracks={tracks} isLoading={isLoading} />
          )}
        </div>
      )}
      {searchResult && !isLoading && tracks?.length <= 0 && (
        <NotFoundText>No Results Found :(</NotFoundText>
      )}
    </Wrapper>
  );
}

export default Search;

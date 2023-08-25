import { useEffect, useRef, useState } from "react";
import { InputWrapper, NotFoundText, TableTitle, Wrapper } from "./styled";
import { search } from "Components/HomePage/Services/api";
import { toast } from "react-toastify";
import TracksTable from "Components/TracksTable";
import Input from "Components/UI/Input";
import SearchIcon from "Assets/Icons/search-input.svg";

function Search() {
  const [searchResult, setSearchResult] = useState("");
  const [tracks, isLoading] = useDebounceLoadData(searchResult);
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

function useDebounceLoadData(searchResult) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const fetchTimeOut = useRef();

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const searchData = await search(searchResult);
        setData(searchData);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (searchResult) {
      clearTimeout(fetchTimeOut.current);
      fetchTimeOut.current = setTimeout(loadData, 500);
    } else {
      setData(null);
    }
  }, [searchResult]);
  return [data, isLoading];
}

export default Search;

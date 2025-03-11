import { useSearchParams } from "react-router";

export const usePagination = (): [number, (value: number) => void] => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Math.max(Number(searchParams.get("p")) || 1, 1);

  const onChange = (value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("p", value.toString());
    setSearchParams(params);
  };

  return [currentPage, onChange];
};

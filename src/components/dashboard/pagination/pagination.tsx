import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore.tsx";
import {
  setActivePage,
  setNextPage,
  setPreviousPage,
} from "@/store/features/devices/deviceSlice.ts";
import { cn } from "@/lib/utils.ts";
import { PayloadAction } from "@reduxjs/toolkit";

type ChangePageCallback = () => PayloadAction<any>;

const ProductPagination = () => {
  const dispatch = useAppDispatch();
  const { totalCount, activePage, limit } = useAppSelector(
    (state) => state.device,
  );

  const pages = [];
  const pageCount = Math.ceil(totalCount / limit);

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  const onChangePage = (actionCreator: ChangePageCallback) =>
    dispatch(actionCreator());

  return (
    <Pagination className={"py-5"}>
      <PaginationContent>
        {pages && (
          <PaginationItem>
            <PaginationPrevious
              className={"cursor-pointer"}
              onClick={() => activePage > 1 && onChangePage(setPreviousPage)}
            />
          </PaginationItem>
        )}

        {pages &&
          pages.map((page) => (
            <PaginationItem>
              <PaginationLink
                onClick={() => dispatch(setActivePage(page))}
                isActive={page === activePage}
                className={cn("cursor-pointer", {
                  "bg-purple-800": page === activePage,
                })}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
        {pages && (
          <PaginationItem>
            <PaginationNext
              className={"cursor-pointer"}
              onClick={() =>
                activePage < pageCount && onChangePage(setNextPage)
              }
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
export default ProductPagination;

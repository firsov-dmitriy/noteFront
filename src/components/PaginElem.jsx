import { Stack, Pagination } from "@mui/material";

export default function PaginationControlled({
  countPage,
  handleChange,
  page,
}) {
  return (
    <Stack
      spacing={2}
      m={2}>
      <Pagination
        count={countPage}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}

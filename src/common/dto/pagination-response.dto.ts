import { IsArray, IsBoolean, IsInt, Min } from 'class-validator';

export class PaginatedResponseDTO<T> {
  @IsArray()
  data: T[];

  @IsInt()
  @Min(1)
  pageSize: number;

  @IsInt()
  @Min(1)
  page: number;

  @IsBoolean()
  isLastPage: boolean;
}

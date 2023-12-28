import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class PaginatedRequestDTO {
  @IsInt({ message: 'Page must be an integer' })
  @Min(1, { message: 'Page must be greater than or equal to 1' })
  @IsOptional()
  page?: number;

  @IsInt({ message: 'Page size must be an integer' })
  @Min(1, { message: 'Page size must be greater than or equal to 1' })
  @IsOptional()
  pageSize?: number;

  @IsString({ message: 'Filter query must be a string' })
  @IsOptional()
  filterQuery?: string;

  @IsString({ message: 'Filter field must be a string' })
  @IsOptional()
  filterField?: string;

  @IsString({ message: 'Filter operator must be a string' })
  @IsOptional()
  filterOperator?: string;

  @IsString({ message: 'Sort order must be a string' })
  @IsOptional()
  sortOrder?: 'ASC' | 'DESC';

  @IsString({ message: 'Sort by must be a string' })
  @IsOptional()
  sortBy?: string;
}

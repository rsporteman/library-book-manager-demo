export interface SearchParams {
  page?: number;
  all?: any;
  search?: string;
  sort?: {
    column: string;
    sort: string;
  }
}

import {SearchParams} from '../../../interfaces/search-params.interface';

export class SearchParamsBuilder {
  constructor(private searchParams: SearchParams) {
  }

  makeObject(): SearchParams {
    const sParams: any = {
      fromObject: {
        page: this.searchParams.page + ''
      }
    };
    if (this.searchParams.all) {
      sParams.all = 1;
      delete sParams.page;
    }
    if (this.searchParams.search && this.searchParams.search !== '') {
      sParams.fromObject.search = this.searchParams.search;
    }
    if (this.searchParams.sort) {
      const sortSymbol = this.searchParams.sort.sort === 'desc' ? '-' : '';
      const columnName = this.searchParams.sort.column;
      sParams.fromObject.sort = `${sortSymbol}${columnName}`;
    }
    return sParams;
  }
}

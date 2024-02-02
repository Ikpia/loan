/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/react-query";
import { useClient } from '../useClient';

export default function useLoanLoan() {
  const client = useClient();
  const QueryParams = ( options: any) => {
    const key = { type: 'QueryParams',  };    
    return useQuery([key], () => {
      return  client.LoanLoan.query.queryParams().then( res => res.data );
    }, options);
  }
  
  const QueryLoan = (id: string,  options: any) => {
    const key = { type: 'QueryLoan',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.LoanLoan.query.queryLoan(id).then( res => res.data );
    }, options);
  }
  
  const QueryLoanAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryLoanAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.LoanLoan.query.queryLoanAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  return {QueryParams,QueryLoan,QueryLoanAll,
  }
}

import useSWR from 'swr';
import { ENDPOINT } from './configs';
import axios from 'axios'
const fetcher = options => axios(options).then(res => res.data)

export const useSWRQuery = (queryKey) => {

    const options = {
        method: 'GET',
        url: ENDPOINT,
        params: {q: queryKey, units: 'metric', lang: 'en'},
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': 'df7f941127mshdf886705f634dcdp18ec8fjsn413788c18576'
        }
      };
    
    const resp = useSWR(options, fetcher, { revalidateOnFocus: false });
    return { ...resp, isLoading: !resp.data && !resp.error }
}
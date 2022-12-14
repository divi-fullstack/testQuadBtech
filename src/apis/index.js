import { 
	getApiWithoutToken, 
} from "./api-interface";

 

export const getAllShows = (search = "all") => {
	return getApiWithoutToken(`/search/shows?q=${search}`);
}


import {axiosService} from "./axiosService";
import {urls} from "../constants";


const priceListService={
    getPriceList:()=>axiosService.get(urls.getPriceList),
    getDateUpdate:()=>axiosService().get(urls.getDateUpdate),
}

export {
    priceListService
}
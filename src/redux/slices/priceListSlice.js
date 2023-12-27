import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {decryptedJson} from "../../components";
import {priceListService} from "../../services";

const initialState = {
    dateOfUpdate: "",
    priceList: {},
    hasData: false,
    isLoading: false,
    errors: null,
    filterPriceList:{},
}

const getAll = createAsyncThunk(
    "priceListSlice/getAll",
    async ({code}, thunkAPI) => {
        try {
            const {data:{dataOfPrice,price}} = await priceListService.getPriceList();
            return thunkAPI.fulfillWithValue({dateUpdate:dataOfPrice,price:decryptedJson(price, code)});
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const filterTree = (obj, predicate) => {
    // If the current object matches the predicate, return it
    if (predicate(obj)) {
        return obj;
    }

    // If the current object has children, filter them recursively
    if (obj.children && Array.isArray(obj.children)) {
        const filteredChildren = obj.children
            .map(child => filterTree(child, predicate))
            .filter(child => child !== null);

        // If any children remain after filtering, return the current object with the filtered children
        if (filteredChildren.length > 0) {
            return {...obj, children: filteredChildren};
        }
    }

    // If the current object and its children do not match the predicate, return null
    return null;
}
const filterTreeByDataId = (obj, strId) => {
    if (obj.data && obj.data.id === strId) return obj;

    if (obj.children) {
        const filteredChildren = obj.children
            .map((child) => filterTreeByDataId(child, strId))
            .filter((child) => child !== null);

        if (filteredChildren.length > 0) {
            return {...obj, children: filteredChildren};
        }
    }
    return null;
}

const priceListSlice = createSlice({
    name: "priceList",
    initialState,
    reducers: {
        getFilterData: (state, action) => {
            const cb = action.payload;
            console.log(cb);
            const tr = state.priceList;
            const fff = filterTree(tr, (node) => node.name === "Knauf Гипсокартон Потолок 2500*1200*9,5 (68шт/палета)");
            console.log(fff);
            state.filter = {};
        },
        getFilterDataById: (state, action) => {
            const strId = action.payload;
            // const tree = JSON.parse(state.priceList);
            const tree = state.priceList;
            const result = filterTreeByDataId(tree, "00000004728");
            console.log(strId, result)
            state.filterPriceList = result;
        }
    },

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.priceList = JSON.parse(action.payload.price);
                state.dateOfUpdate = action.payload.dateUpdate.slice(-10);
                state.isLoading = false;
                state.errors = null;
                state.hasData=Object.keys(state.priceList).length>0
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
                console.log("rejected",Object.keys(state.priceList).length);
            })
            .addCase(getAll.pending, (state, action) => {
                state.isLoading = true;
            })
});


const {reducer: priceListReducer, actions} = priceListSlice;

const priceListActions = {
    ...actions,
    getAll
}

export {
    priceListReducer,
    priceListActions
}
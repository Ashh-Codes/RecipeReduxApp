import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllRecipes = createAsyncThunk("recipes/fetchAllRecipes",async()=>{
    const result = await axios.get("https://dummyjson.com/recipes")
   // console.log(result);
    sessionStorage.setItem("allRecipes",JSON.stringify(result.data.recipes))
    return result.data.recipes
    
})


const recipeSlice =createSlice({
    name :'recipes',
    initialState:{
        allRecipes: [],
        dummyAllRecipes:[],
        loading:false,
        error:""
    },
    reducers:{
        //search product
        searchProduct :(state,actionFromHeader)=>{
        state.allRecipes=    state.dummyAllRecipes.filter(item=>item.cuisine.toLowerCase().includes(actionFromHeader.payload))
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllRecipes.fulfilled,(state,apiResult)=>{
            state.allRecipes = apiResult.payload
            state.dummyAllRecipes=apiResult.payload
            state.loading = false
            state.error=""
        })
        builder.addCase(fetchAllRecipes.pending,(state,apiResult)=>{
            state.allRecipes = []
            state.dummyAllRecipes=[]
            state.loading = true
            state.error=""
        })
        builder.addCase(fetchAllRecipes.rejected,(state,apiResult)=>{
            state.allRecipes = []
            state.dummyAllRecipes=[]
            state.loading = false
            state.error="Api call failed ..try after sometime"
        })
    }
})
export default recipeSlice.reducer
export const {searchProduct} =recipeSlice.actions
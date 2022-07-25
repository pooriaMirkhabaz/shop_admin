/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import ICategoryGroup from '../components/category/attribute/ICategoryGroup'
import { v4 as uuid } from 'uuid'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Http from '../services/Http'

export interface ICategoryState {
    title : string;
    slug : string;
    groups : ICategoryGroup[]
}

export const CategoryInitState : ICategoryState = {
  title: '',
  slug: '',
  groups: [
    {
      hash: '7b11971f-73a6-4f95-b249-d2ac5f47f0f5',
      title: 'مشخصات کلی ',
      attributes: []
    }
  ]
}

export interface IAction {
  type : string;
  payload : any
}

export const saveCategory = createAsyncThunk('category/save', async (data, thunkAPI) => {
  const state = thunkAPI.getState() as object
  console.log(state.category as object)
})

const CategorySlice = createSlice({
  name: 'category',
  initialState: CategoryInitState,
  reducers: {
    addNewCategoryGroup (state : ICategoryState, action : IAction) {
      state.groups = [
        ...state.groups,
        {
          hash: uuid(),
          title: action.payload,
          attributes: []
        }
      ]
    },
    addNewCategoryAttribute (state : ICategoryState, action : IAction) {
      state.groups.forEach((group) => {
        if (group.hash === action.payload) {
          group.attributes = [
            ...group.attributes,
            {
              groupID: action.payload,
              hash: uuid(),
              title: '',
              slug: '',
              filterable: true,
              hasPrice: false
            }
          ]
        }
      })
    },
    deleteCategoryGroup (state : ICategoryState, action : IAction) {
      if (action.payload !== '7b11971f-73a6-4f95-b249-d2ac5f47f0f5') {
        state.groups = state.groups.filter((group) => {
          if (group.hash !== action.payload) {
            return group
          }
        })
      }
    },
    UpdateCategory (state : any, action : IAction) {
      const { field, value } = action.payload
      state[field] = value
    },
    UpdateCategoryAttribute (state : any, action : IAction) {
      const { groupID, hash, field, value } = action.payload
      state.groups.map((group : ICategoryGroup) => {
        if (group.hash === groupID) {
          group.attributes.map((attr : any) => {
            if (attr.hash === hash) {
              attr[field] = value
            }
          })
        }
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(saveCategory.fulfilled, (state : ICategoryState, action : IAction) => {
      console.log(state)
    })
  }
})

export const {
  addNewCategoryGroup,
  addNewCategoryAttribute,
  deleteCategoryGroup,
  UpdateCategory,
  UpdateCategoryAttribute
} = CategorySlice.actions
export default CategorySlice.reducer

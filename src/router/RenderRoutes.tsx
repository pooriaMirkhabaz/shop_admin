import React from 'react'
import { Routes, Route } from 'react-router'
import category from '../components/category/category'
import AddCategory from '../components/category/AddCategory'
import Products from '../components/products/Products'
import AddProduct from '../components/products/AddProduct'

interface IRouterItem {
    path : string,
    component : any
}

const RouterItems : IRouterItem [] = [
  {
    path: '/category',
    component: category
  },
  {
    path: '/category/add',
    component: AddCategory
  },
  {
    path: '/products',
    component: Products
  },
  {
    path: '/products/add',
    component: AddProduct
  }
]

export default function RenderRoutes () {
  return (
            <Routes>
                  <>
                      {
                          RouterItems.map((router : IRouterItem, index) => {
                            return <Route path={router.path} element={router.component()} key={index} />
                          })
                      }
                  </>
            </Routes>
  )
}

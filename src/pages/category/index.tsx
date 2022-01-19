import React from 'react'
import AdminNavigation from '../../layouts/AdminNavigation'
import MainCategory from './MainCategory'
import "../../styles/Category.css";
import SubCategroy from './SubCategory';
import AddNewCategorybtn from '../../components/AddNewCategorybtn';

function Index() {
    return (
        <AdminNavigation>
            <AddNewCategorybtn />
            <MainCategory />
            <SubCategroy />
        </AdminNavigation>
    )
}

export default Index

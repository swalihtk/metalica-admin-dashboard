import React from 'react'

function MainCategory() {
    return (
        <div className='main-cateogry'>
                <div className='main-category-header'>
                    <h1>Category Name:</h1>
                    <div className='main-selecter'>
                    <select>
                        <option value={"demo1"}>demo1</option>
                        <option value={"demo2"}>demo2</option>
                        <option value={"demo3"}>demo3</option>
                        <option value={"demo4"}>demo4</option>
                    </select>   
                    </div>
                </div>

                <div className="main-category-desc">
                    <h1>Discription: </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet hic nam architecto minus eaque quam! Itaque ex voluptates beatae assumenda amet, quas corporis totam voluptate inventore dolorum saepe consequuntur alias quidem accusamus. Recusandae repudiandae modi, suscipit dicta facilis veniam quis officiis nobis dolor in quae cum nam aliquid dolore.</p>
                </div>
        </div>
    )
}

export default MainCategory

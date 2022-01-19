import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

function AddSubCatBtn() {

    let [showSubCatAddModal, setShowSubCatModal]=useState<boolean>(false);

    return (
        <>
        <Modal
        show={showSubCatAddModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
         centered
        >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" style={{margin:"0 auto"}}>
            Add Subcategory
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="category-form">
            <form>
                <div className="category-row">
                    <div className="col-25">
                        <label htmlFor="category-name">Sub Category Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="category-name" placeholder="Enter category name.."/>
                    </div>
                </div>
                <div className="category-row">
                    <div className="col-25">
                        <label htmlFor="add-subcat-img">Image</label>
                    </div>
                    <div className="col-75">
                       <input type="file" id="add-subcat-img"  accept='image/*'/>
                       <img src="https://www.cdc.gov/handwashing/images/posters/wash-your-hands-campaign-thumb-sml.png?_=85535" alt="" />
                    </div>
                </div>
                <button className="category-addbtn" >Create</button>
                <button className="cancelbtn" type="button" onClick={()=>setShowSubCatModal(false)}>Cancel</button>
            </form>
        </div>
      </Modal.Body>
    </Modal>

        <div className="subcategory-card-add">
          <h4 style={{textAlign:"center"}}>Add Sub Category</h4>
          <div className="subcategory-opt">
            <div className="subcategory-add-btn" onClick={()=>setShowSubCatModal(true)}>
            <img src="https://img.icons8.com/ios-filled/50/000000/add--v1.png"/>
            </div>
            <div className="subcategory-act">
              
            </div>
          </div>
        </div>
        </>
    )
}

export default AddSubCatBtn

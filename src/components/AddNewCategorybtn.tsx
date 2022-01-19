import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AddNewCategorybtn() {
    let [showCategoryModal, setShowCategoryModal]=useState<boolean>(false);


  return (
    <>
        {/* Create Category modal */}
        <Modal
        show={showCategoryModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
         centered
        >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
            Create New Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="category-form">
            <form>
                <div className="category-row">
                    <div className="col-25">
                        <label htmlFor="category-name">Category Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="category-name" placeholder="Enter category name.."/>
                    </div>
                </div>
                <div className="category-row">
                    <div className="col-25">
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="col-75">
                       <textarea placeholder="write discription.." id="description" style={{height:"100px"}}/> 
                    </div>
                </div>
                <button className="category-addbtn">Create</button>
                <button className="cancelbtn" type="button" onClick={()=>setShowCategoryModal(false)}>Cancel</button>
            </form>
        </div>
      </Modal.Body>
    </Modal>
        {/* End of Create Category */}
      <div className="add-new-category-div">
        <button className="add-new-category-btn" onClick={()=>setShowCategoryModal(true)}>Add New Category</button>
      </div>
    </>
  );
}

export default AddNewCategorybtn;

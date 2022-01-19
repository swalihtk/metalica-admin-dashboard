import React from "react";
import AddSubCatBtn from "../../components/AddSubCatBtn";

function SubCategroy() {
  return (
    <div className="subcateogry">
      <h1>
        Subcategory
      </h1>
      <div className="subcategory-list">

          {/* card 1 */}
        <div className="subcategory-card">
          <h4>1.Football</h4>
          <div className="subcategory-opt">
            <div className="subcategory-img">
              <img
                src="https://www.cdc.gov/handwashing/images/posters/wash-your-hands-campaign-thumb-sml.png?_=85535"
                alt=""
              />
            </div>
            <div className="subcategory-act">
              <img src="https://img.icons8.com/ios-glyphs/30/fa314a/filled-trash.png" /><br/>
              <img src="https://img.icons8.com/ios-glyphs/50/000000/edit--v1.png" />
            </div>
          </div>
        </div>
        {/* Card end */}

        {/* card 1 */}
        <div className="subcategory-card">
          <h4>1.Football</h4>
          <div className="subcategory-opt">
            <div className="subcategory-img">
              <img
                src="https://www.cdc.gov/handwashing/images/posters/wash-your-hands-campaign-thumb-sml.png?_=85535"
                alt=""
              />
            </div>
            <div className="subcategory-act">
              <img src="https://img.icons8.com/ios-glyphs/30/fa314a/filled-trash.png" /><br/>
              <img src="https://img.icons8.com/ios-glyphs/50/000000/edit--v1.png" />
            </div>
          </div>
        </div>
        {/* Card end */}

        {/* card 1 */}
        <div className="subcategory-card">
          <h4>1.Football</h4>
          <div className="subcategory-opt">
            <div className="subcategory-img">
              <img
                src="https://www.cdc.gov/handwashing/images/posters/wash-your-hands-campaign-thumb-sml.png?_=85535"
                alt=""
              />
            </div>
            <div className="subcategory-act">
              <img src="https://img.icons8.com/ios-glyphs/30/fa314a/filled-trash.png" /><br/>
              <img src="https://img.icons8.com/ios-glyphs/50/000000/edit--v1.png" />
            </div>
          </div>
        </div>
        {/* Card end */}

        {/* card 1 */}
        <div className="subcategory-card">
          <h4>1.Football</h4>
          <div className="subcategory-opt">
            <div className="subcategory-img">
              <img
                src="https://www.cdc.gov/handwashing/images/posters/wash-your-hands-campaign-thumb-sml.png?_=85535"
                alt=""
              />
            </div>
            <div className="subcategory-act">
              <img src="https://img.icons8.com/ios-glyphs/30/fa314a/filled-trash.png" /><br/>
              <img src="https://img.icons8.com/ios-glyphs/50/000000/edit--v1.png" />
            </div>
          </div>
        </div>
        {/* Card end */}
        
        {/* Add New Category */}
        <AddSubCatBtn />
        {/* End of Add New Card */}

      </div>
    </div>
  );
}

export default SubCategroy;

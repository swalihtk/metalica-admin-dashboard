import React, { useState } from "react";
import "../styles/AdminDashboard.css";
import { Link } from "react-router-dom";

type AdminNavigationProps = {
  children: React.ReactChild[];
};

function AdminNavigation(props: AdminNavigationProps) {
  return (
    <>
      <input type="checkbox" id="hamburger" defaultChecked/>
      <div className="sidebar">
        <div className="sidebar-brand">
          <h1>METALICA</h1>
          <label htmlFor="hamburger">
            <img
              src="https://img.icons8.com/ios/50/ffffff/hamburger.png"
              width={30}
              height={30}
            />
          </label>
        </div>

        <div className="sidebar-items">
          <ul>
            <li>
              <Link to="#">
                <span>
                  <img src="https://img.icons8.com/ios-glyphs/30/ffffff/home.png" />
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span>
                  <img src="https://img.icons8.com/ios-glyphs/30/ffffff/home.png" />
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span>
                  <img src="https://img.icons8.com/ios-glyphs/30/ffffff/home.png" />
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span>
                  <img src="https://img.icons8.com/ios-glyphs/30/ffffff/home.png" />
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span>
                  <img src="https://img.icons8.com/ios-glyphs/30/ffffff/home.png" />
                </span>
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <header>
          <div>
            <h1>Dashboard</h1>
          </div>
          <div className="search-wraper">
            <input type="search" placeholder="search here.."/>
            <span>
              <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-search-interface-kiranshastry-solid-kiranshastry.png" />
            </span>
          </div>

          <div className="right-nav">
            <div className="notification">
              <span>
                <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-notification-interface-kiranshastry-solid-kiranshastry.png" />
              </span>
            </div>

            <div className="user-wrapper">
              <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/ffffff/external-User-essential-collection-bearicons-glyph-bearicons.png" />
              <h4>Username</h4>
            </div>
          </div>
        </header>

        <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod, fuga perferendis officia ratione deserunt quasi nam numquam magni nulla, cupiditate sunt ex facere possimus, magnam optio ipsum rerum dolor delectus impedit sapiente voluptates qui! Animi, veniam dolor ad quibusdam saepe blanditiis aliquam fugit id, in perspiciatis quae fugiat laboriosam facilis nesciunt tempore. Excepturi neque non totam, recusandae dolores vitae, quibusdam quam amet commodi mollitia optio aspernatur harum incidunt tempora accusamus maxime magnam iusto alias provident eaque illo! Atque labore ullam itaque aliquid vel! Quidem tempora incidunt quaerat assumenda, modi eaque magnam aperiam reprehenderit ex aliquid consectetur! Explicabo, eveniet alias. Explicabo, ipsam sapiente corrupti, consequatur quidem placeat deleniti tempora ex impedit itaque perspiciatis, et officia id delectus maxime eius aliquam provident eligendi quos ratione similique! Repellat ad, praesentium eaque amet non voluptates temporibus, quia asperiores ipsam nostrum magnam at necessitatibus provident voluptate animi id reprehenderit natus quasi illo repellendus, tempora deleniti dolores nemo! Officia sit molestiae quasi quaerat praesentium ullam perferendis accusantium, architecto quis facilis dolorum cumque ex accusamus dolore eos perspiciatis vitae doloremque nihil at esse. Modi molestias aspernatur aut cumque harum asperiores perspiciatis officia tempora corporis quod maiores accusantium assumenda corrupti, dolorem deleniti non doloribus, nisi eos? Modi, nobis earum consequatur ipsam eos quas! Quis iusto laborum odio magnam expedita nam! Quos itaque eligendi quas voluptate quae nihil soluta expedita ipsam, quia velit cumque illum ipsa natus possimus optio sint dicta doloribus dolore nemo amet quisquam doloremque, accusamus, hic aspernatur. Molestias laudantium, velit omnis quis quo suscipit dolor aspernatur deleniti voluptatibus expedita ad sapiente unde iusto necessitatibus quia, molestiae neque qui laboriosam eos. Mollitia a obcaecati eius unde fugiat ullam minima, eos numquam quae, porro autem nulla tempora optio eligendi pariatur sit. Nemo ducimus voluptatibus temporibus enim, ullam, doloribus reprehenderit perferendis officia dolorum facere quaerat repellat nostrum aspernatur quibusdam fuga laborum sunt consectetur quidem, neque sapiente voluptas itaque! Ullam magnam sequi voluptate officiis vitae numquam molestias soluta veritatis sapiente? Perferendis, autem sit. Aspernatur ex quis eius facere culpa deleniti voluptas, quia laborum quae neque sequi velit aperiam suscipit sapiente impedit explicabo harum eaque error aliquid amet adipisci voluptate esse pariatur vitae? Odit, aspernatur commodi dicta, eos harum quam enim exercitationem aut labore dolore natus nesciunt autem sint. Cupiditate inventore odio adipisci qui! Nam iste quidem enim. Maiores ad voluptatibus quia reprehenderit at quaerat veniam. Soluta cumque quaerat aliquam aperiam molestiae accusantium eum, dignissimos earum error. Ut, sed voluptatum?</p>
        </div>
      </div>
    </>
  );
}

export default AdminNavigation;

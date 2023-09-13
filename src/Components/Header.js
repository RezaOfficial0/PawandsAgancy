import React from "react";
import "./headerStyle.css";
import arrow from "../assents/arrow.png";
import Headimg from "../assents/head11.jpg";
function Header() {
  return (
    <div className="Header">
     
      <div className="Header1">
        <div className="header1">
          <h1>Pawands </h1>
          <h2>Marketing Agancy</h2>
          <img src={arrow}></img>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <img src={Headimg}></img>
          </div>
          <div class="col-6">
            <div className="Head-p">
              <p>
                At Pawands, we specialize in crafting exceptional websites while
                taking your online presence to new heights through strategic
                Search Engine Optimization (SEO). In today's competitive digital
                landscape, a strong website combined with effective SEO is
                crucial for business success.
              </p>
              <hr className="header-hr"></hr>
              <p>
                🌐 Website Design: We understand that your website is often the
                first impression you make on potential customers. Our expert
                designers create visually captivating, user-friendly websites
                that reflect your brand's identity and values.
              </p>
              <p>
                🔍 SEO Excellence: Being found online is as important as having
                a stunning website. Our SEO wizards work behind the scenes to
                optimize your website's content, structure, and technical
                aspects to rank higher in search engine results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "./style.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div class="contain">
          <div class="col">
            <h1>ZIPPYZIP</h1>
            <ul>
              <li>
                Contact: <a href="mailto:abc@gmail.com">contact@zippyzip.com</a>
              </li>
              <li>
                Address: Building no.111 xyz gali,Delhi 212121
                </li>
              <li>
                Tel: <a href="tel: +129876432312">+12 987-643-2312</a>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </>
  );
}
export default Footer;

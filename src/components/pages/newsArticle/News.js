import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import calendorIcon from "../../assets/images/news/calenderIcon.svg";
import Pagination from "./Pagination";
export const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 120; // Total number of items
  const itemsPerPage = 40; // Items per page

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can perform any actions here when the page changes, such as fetching data for the new page
  };
  return (
    <React.Fragment>
      <div className="news-blog-section">
        <div className="news-column">
          <div className="blog-post-section">
            <div className="blog-image">
              <img
                src="https://via.placeholder.com/800x500"
                className="img-fluid img-blog"
              />
              <div className="post-tag">
                <div className="post-date">31 December,2023</div>
                <div className="web-design">
                  <span>
                    <img src="" />
                  </span>
                  <span>Web Design</span>
                </div>
                <div className="post-comment">
                  <span>
                    <img src="" />
                  </span>
                  <span>Comments(05)</span>
                </div>
              </div>
            </div>
            <div className="blog-title">Simplify IT for Enhanced </div>
            <div className="blog-read">
              Web designing in a powerful way of just not an only professions,
              however, in a passion for our Company. We have to a tendency to
              believe the idea that smart looking of any websitet in on
              visitors.Web designing in a powerful way of just not an only
              profession
            </div>
            <div className="blog-read-more">
              <button className="read-more-btn">Read More</button>
            </div>
          </div>

          <div className="blog-post-section">
            <div className="blog-image">
              <img
                src="https://via.placeholder.com/800x500"
                className="img-fluid img-blog"
              />
              <div className="post-tag">
                <div className="post-date">31 December,2023</div>
                <div className="web-design">
                  <span>
                    <img src="" />
                  </span>
                  <span>Web Design</span>
                </div>
                <div className="post-comment">
                  <span>
                    <img src="" />
                  </span>
                  <span>Comments(05)</span>
                </div>
              </div>
            </div>
            <div className="blog-title">Simplify IT for Enhanced </div>
            <div className="blog-read">
              Web designing in a powerful way of just not an only professions,
              however, in a passion for our Company. We have to a tendency to
              believe the idea that smart looking of any websitet in on
              visitors.Web designing in a powerful way of just not an only
              profession
            </div>
            <div className="blog-read-more">
              <button className="read-more-btn">Read More</button>
            </div>
          </div>

          <div className="blog-post-section">
            <div className="blog-image">
              <img
                src="https://via.placeholder.com/800x500"
                className="img-fluid img-blog"
              />
              <div className="post-tag">
                <div className="post-date">31 December,2023</div>
                <div className="web-design">
                  <span>
                    <img src="" />
                  </span>
                  <span>Web Design</span>
                </div>
                <div className="post-comment">
                  <span>
                    <img src="" />
                  </span>
                  <span>Comments(05)</span>
                </div>
              </div>
            </div>
            <div className="blog-title">Simplify IT for Enhanced </div>
            <div className="blog-read">
              Web designing in a powerful way of just not an only professions,
              however, in a passion for our Company. We have to a tendency to
              believe the idea that smart looking of any websitet in on
              visitors.Web designing in a powerful way of just not an only
              profession
            </div>
            <div className="blog-read-more">
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        </div>
        <div className="news-advance-search">
          <div className="search-advance">
            <div className="advance-search-title">Search Here</div>
            <hr className="divider" />
            <div class="search-input">
              <input
                type="text"
                className="form-control form-control-lg"
                id="colFormLabelLg"
                placeholder="col-form-label-lg"
                onChange={(e) => console.log("value search", e.target.value)}
              />
              <FontAwesomeIcon icon={faSearch} className="magnifying-glass" />
            </div>
          </div>

          <div className="search-advance">
            <div className="advance-search-title">CATEGORY</div>
            <hr className="divider" />
            <div className="category-list">
              <div className="cat-item">Cleaning</div>
              <div className="cat-item">Cloud Solution</div>
              <div className="cat-item">Free Service</div>
              <div className="cat-item">Cleaner</div>
              <div className="cat-item">SEO Marketing</div>
              <div className="cat-item">CPA Marketing</div>
            </div>
          </div>

          <div className="search-advance">
            <div className="advance-search-title">POPULAR POST</div>
            <hr className="divider" />
            <div className="popular-post-list">
              <div className="post">
                <div className="post-img">
                  <img
                    src="https://via.placeholder.com/100x100"
                    className="img-post-news img-fluid"
                  />
                </div>
                <div className="post-date">
                  <div className="date">
                    <span className="date-img">
                      <img
                        src={calendorIcon}
                        className="img-fluid img-calender"
                      />
                    </span>
                    <span>October 19, 2023</span>
                  </div>
                  <div className="post-heading">
                    {" "}
                    Connect Innovate Succeed the design
                  </div>
                </div>
              </div>

              <div className="post">
                <div className="post-img">
                  <img
                    src="https://via.placeholder.com/100x100"
                    className="img-post-news img-fluid"
                  />
                </div>
                <div className="post-date">
                  <div className="date">
                    <span className="date-img">
                      <img
                        src={calendorIcon}
                        className="img-fluid img-calender"
                      />
                    </span>
                    <span>October 19, 2023</span>
                  </div>
                  <div className="post-heading">
                    Elevate Your Business with IT the most{" "}
                  </div>
                </div>
              </div>

              <div className="post">
                <div className="post-img">
                  <img
                    src="https://via.placeholder.com/100x100"
                    className="img-post-news img-fluid"
                  />
                </div>
                <div className="post-date">
                  <div className="date">
                    <span className="date-img">
                      <img
                        src={calendorIcon}
                        className="img-fluid img-calender"
                      />
                    </span>
                    <span>October 19, 2023</span>
                  </div>
                  <div className="post-heading">
                    Simplify IT for Enhanced Productivity
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="search-advance">
            <div className="advance-search-title">POPULAR TAG</div>
            <hr className="divider" />
            <div className="tag-list">
              <div className="tag-item">TechPros</div>
              <div className="tag-item">NetWorks</div>
              <div className="tag-item">CyberSafe</div>
              <div className="tag-item">Web</div>
              <div className="tag-item">InnovIT</div>
              <div className="tag-item">TechSavvy</div>
              <div className="tag-item">SoftwareMasters</div>
            </div>
          </div>

          <div className="search-advance">
            <div className="advance-search-title">NEWSLETTER</div>
            <div className="words">
              Subscrie to get more help and information
            </div>
            <div class="search-input">
              <input
                type="text"
                className="form-control form-control-lg"
                id="colFormLabelLg"
                placeholder="col-form-label-lg"
                onChange={(e) => console.log("value search", e.target.value)}
              />
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="magnifying-glass"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pagination-row">
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </React.Fragment>
  );
};

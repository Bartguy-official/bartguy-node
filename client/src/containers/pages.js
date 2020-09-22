import React from "react";
import { connect } from "react-redux";
import { populatePageData } from "../redux/actions/pages";
import ReactHtmlParser from "react-html-parser";

class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: [],
      pageName: "",
    };
  }

  async componentDidMount() {
    const location = this.props.location.pathname.split("/");
    console.log(location[1]);
    await this.props.populatePageData(location[1]);
  }

  render() {
    let sectionStype = {
      padding: "30px",
    };

    return (
      <>
        <section className="blog_slider_area" style={sectionStype}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="blog_slider_box">
                  <h2>{this.props.pageData.title}</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="">
              <div className="blog_detail_in_page">
                {ReactHtmlParser(this.props.pageData.description)}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    populatePageData: (pageName) => {
      dispatch(populatePageData(pageName));
    },
  };
};

const mapStoreToProps = (store) => {
  console.log("--store");
  console.log(store);
  return {
    pageData: store.pages.pageData,
    pageName: store.pages.pageName,
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Pages);

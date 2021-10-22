import { connect } from "react-redux";
import Header from "../components/header";
import { Dispatch, bindActionCreators } from "redux";
import {
  shuffleData,
  sortData,
  toggleTag,
  toggleResize,
  resizeIndex,
  resizeLeft,
  changeWidth,
} from "../actions";

const mapStateToProps = (state: any): { state: any } => ({
  state: state,
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    shuffleData: bindActionCreators(shuffleData, dispatch),
    sortData: bindActionCreators(sortData, dispatch),
    toggleTag: bindActionCreators(toggleTag, dispatch),
    toggleResize: bindActionCreators(toggleResize, dispatch),
    resizeIndex: bindActionCreators(resizeIndex, dispatch),
    resizeLeft: bindActionCreators(resizeLeft, dispatch),
    changeWidth: bindActionCreators(changeWidth, dispatch),
  };
}

const HeaderCon = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderCon;

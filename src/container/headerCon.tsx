import { connect } from "react-redux";
import Header from "../components/header";
import { Dispatch, bindActionCreators } from "redux";
import { shuffleData, sortData, toggleTag } from "../actions";

const mapStateToProps = (state: any): { state: any } => ({
  state: state,
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    shuffleData: bindActionCreators(shuffleData, dispatch),
    sortData: bindActionCreators(sortData, dispatch),
    toggleTag: bindActionCreators(toggleTag, dispatch),
  };
}

const HeaderCon = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderCon;

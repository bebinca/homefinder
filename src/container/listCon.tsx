import { connect } from "react-redux";
import CandidateList from "../components/candidateList";
import { Dispatch } from "redux";
// import { Dispatch, bindActionCreators } from "redux";
// import { shuffleData, sortData } from "../actions";

const mapStateToProps = (state: any): { state: any } => ({
  state: state,
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    // shuffleData: bindActionCreators(shuffleData, dispatch),
    // sortData: bindActionCreators(sortData, dispatch),
  };
}

const ListCon = connect(mapStateToProps, mapDispatchToProps)(CandidateList);
export default ListCon;

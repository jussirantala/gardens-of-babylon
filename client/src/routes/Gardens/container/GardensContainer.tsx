import { connect } from 'react-redux';
import { getGardens } from 'store/actions';
import { Store } from 'types';
import Gardens from '../view/Gardens';

const mapDispatchToProps = (dispatch: Function) => ({
    getGardens: () => {
        dispatch(getGardens());
    }
});

const mapStateToProps = (state: Store.State) => ({
    gardens: state.gardens
});

export default connect(mapStateToProps, mapDispatchToProps)(Gardens);

import firebase from './lib/firebase';
import withFirebasePagination from './src/withFirebasePagination';
import List from '../components/List';

const ListContainer = withFirebasePagination(firebase)({
  path: '/',
  orderBy: 'value',
  length: 4
})(List);

export default ListContainer;
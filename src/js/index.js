import store from './store/reduxstore';
import { addArticle } from './actions/action';

window.store = store;
window.addArticle = addArticle;

store.subscribe(() => {
    console.log("Redux!!");
});

store.dispatch(addArticle({
    title: "Learning Redux",
    id: 1
}));
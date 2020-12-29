import store from '../js/store/index';
import { addArticle } from '../js/actions/index';

window.store = store;
window.addArticle = addArticle;

store.subscribe(() => {
    console.log("Redux!!");
});

store.dispatch(addArticle({
    title: "Learning Redux",
    id: 1
}));
import ListResto from '../views/pages/now-playing';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': ListResto, // default page
  '/restaurant': ListResto,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;

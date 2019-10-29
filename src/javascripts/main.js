import 'bootstrap';
import '../styles/main.scss';
import cowList from './components/cowList/cowList';
import farmerList from './components/farmerList/farmerList';
import farmerCowData from './helpers/data/farmerCowData';

const init = () => {
  cowList.buildCows();
  farmerList.buildFarmers();
  farmerCowData.getFarmerCows()
    .then((farmerCows) => {
      console.error('from main.js', farmerCows);
    })
    .catch((error) => {
      console.error(error);
    });
};

init();

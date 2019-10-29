import './farmerList.scss';
import farmerData from '../../helpers/data/farmerData';

const buildFarmers = () => {
  farmerData.getFarmers()
    .then((farmers) => {
      console.error('farmerArray from farmerlist', farmers);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildFarmers };

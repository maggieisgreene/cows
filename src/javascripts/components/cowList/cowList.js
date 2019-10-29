import './cowList.scss';
import cowData from '../../helpers/data/cows';

const buildCows = () => {
  cowData.getCows()
    .then((response) => {
      console.error('cow array from cowlist', response);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };

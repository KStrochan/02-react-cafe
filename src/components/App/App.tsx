import CafeInfo from '../CafeInfo/CafeInfo';
import css from './App.module.css';

function App() {
  return (
    <div className={css.app}>
      <CafeInfo />
      {/* Сюди ми будемо додавати VoteOptions та VoteStats */}
    </div>
  );
}

export default App;
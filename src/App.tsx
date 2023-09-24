import './App.scss';
import { BasicTable } from './components/BasicTable';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { TableHeading } from './components/TableHeading';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Sidebar />
        <section className="main__table">
          <TableHeading />
          <BasicTable />
          <div className="main__table__overlay"></div>
        </section>
      </main>
    </>
  );
}

export default App;

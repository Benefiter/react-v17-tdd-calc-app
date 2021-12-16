import { Route } from 'react-router-dom';
import About from '../Appointment/About';
import AppointmentsWorkflow from '../Appointment/AppointmentsWorkflow';
import Calculator from '../Calculator/Calculator';
import TestPage from '../TestPage/TestPage';
import { useHistory } from 'react-router-dom';
import TBD from '../TBD';

const Sidebar = () => {
  const history = useHistory();

  return (
    <>
      <div
        className='offcanvas offcanvas-start w-25'
        // tabindex='-1'
        id='offcanvas'
        data-bs-keyboard='false'
        data-bs-backdrop='false'
      >
        <div className='offcanvas-header'>
          <h6 className='offcanvas-title d-none d-sm-block' id='offcanvas'>
            Menu
          </h6>
          <button
            type='button'
            className='btn-close text-reset'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body px-0'>
          <ul
            className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-start'
            id='menu'
          >
            <li className='dropdown'>
              <div
                onClick={() => history.push('/')}
                className='nav-link dropdown-toggle  text-truncate'
                id='dropdown'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='fs-5 bi-table'></i>
                <span className='ms-1 d-none d-sm-inline'>
                  Appointments Workflow
                </span>
              </div>
              <ul
                className='dropdown-menu text-small shadow'
                aria-labelledby='dropdown'
              >
                <li>
                  <div
                    className='dropdown-item'
                    onClick={() => history.push('/TBD')}
                  >
                    Help
                  </div>
                </li>
              </ul>
            </li>
            <li className='dropdown'>
              <div
                onClick={() => history.push('/calculator')}
                className='nav-link dropdown-toggle  text-truncate'
                id='dropdown'
                data-bs-toggle='dropdown'
                aria-expanded='true'
              >
                <i className='fs-5 bi-table'></i>
                <span
                  onClick={() => console.log('Calculator click handler')}
                  className='ms-1 d-none d-sm-inline'
                >
                  Calculator
                </span>
              </div>
              <ul
                className='dropdown-menu text-small shadow'
                aria-labelledby='dropdown'
              >
                <li>
                  <div
                    className='dropdown-item'
                    onClick={() => history.push('/TBD')}
                  >
                    Clear History
                  </div>
                </li>
                <li>
                  <div
                    className='dropdown-item'
                    onClick={() => history.push('/TBD')}
                  >
                    Help
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col min-vh-100 p-4'>
            <button
              className='btn float-end'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvas'
            >
              <i
                className='bi bi-arrow-right-square-fill fs-3'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvas'
              ></i>
            </button>
            <Route exact path='/about' component={About} />
            <Route exact path='/' component={AppointmentsWorkflow} />
            <Route exact path='/calculator' component={Calculator} />
            <Route exact path='/testpage' component={TestPage} />
            <Route exact path='/TBD' component={TBD} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

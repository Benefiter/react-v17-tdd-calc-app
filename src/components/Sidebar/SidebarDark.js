import { Route } from 'react-router-dom';
import About from '../Appointment/About';
import AppointmentsWorkflow from '../Appointment/AppointmentsWorkflow';
import Calculator from '../Calculator/Calculator';
import TestPage from '../TestPage/TestPage';
import { useHistory } from 'react-router-dom';

const SidebarDark = () => {
  const history = useHistory();

  return (
      <div className='container-fluid'>
        <div className='row flex-nowrap'>
          <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark'>
            <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
              <a
                href='/'
                className='d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none'
              >
                <span className='fs-5 d-none d-sm-inline'>Menu</span>
              </a>
              <ul
                className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start'
                id='menu'
              >
                <li>
                  <div
                    onClick={() => history.push('/')}
                    className='nav-link px-0 align-middle'
                  >
                    <i className='fs-4 bi-speedometer2'></i>{' '}
                    <span className='ms-1 d-none d-sm-inline'>
                      Appointments Workflow
                    </span>{' '}
                  </div>
                  <ul
                    className='collapse show nav flex-column ms-1 ps-4'
                    id='submenu1'
                    data-bs-parent='#menu'
                  >
                    <li className='w-100'>
                      <a href='#' className='nav-link px-0'>
                        {' '}
                        <span className='d-none d-sm-inline'>Help</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <div
                    onClick={() => history.push('/calculator')}
                    className='nav-link px-0 align-middle'
                  >
                    <i className='fs-4 bi-table'></i>{' '}
                    <span className='ms-1 d-none d-sm-inline'>Calculator</span>{' '}
                  </div>
                  <ul
                    className='collapse show nav flex-column ms-1 ps-4'
                    id='submenu1'
                    data-bs-parent='#menu'
                  >
                    <li className='w-100'>
                      <a href='#' className='nav-link px-0'>
                        {' '}
                        <span className='d-none d-sm-inline'>
                          Clear History
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='nav-link px-0'>
                        {' '}
                        <span className='d-none d-sm-inline'>Help</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <div
                    onClick={() => history.push('/testpage')}
                    className='nav-link px-0 align-middle'
                  >
                    <i className='fs-4 bi-speedometer2'></i>{' '}
                    <span className='ms-1 d-none d-sm-inline'>Test page</span>{' '}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        <Route exact path='/about' component={About} />
        <Route exact path='/' component={AppointmentsWorkflow} />
        <Route exact path='/calculator' component={Calculator} />
        <Route exact path='/testpage' component={TestPage} />
        </div>
      </div>
  );
};

export default SidebarDark;

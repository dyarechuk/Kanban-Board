import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './App.css';
import { UrlBreadcrumb } from './components/UrlBreadCrumb/UrlBreadCrumb';

function App() {
  return (
    <div className='container'>
      <Form className='d-flex gap-3 mt-4'>
        <Form.Control type='text' placeholder='Enter repo URL' />
        <Button type='submit' className='text-nowrap'>
          Load issues
        </Button>
      </Form>
      <UrlBreadcrumb />
      <div className='row mt-4 mb-4'>
        <div className=''></div>
        <div className='col-md-4 col-sm-6 col-12'>
          <h3 className='text-center mb-3'>ToDo</h3>
          <div className='border bg-dark-subtle' style={{ minHeight: '100vh' }}>
            <div className='card mx-3 mt-3'>
              <h6 className='card-title px-3 mt-2 mb-0'>Some issue title</h6>
              <p className='card-body py-0 mt-1 mb-0'>#315 opened 3 days ago</p>
              <p className='card-text px-3 mt-1 mb-2'>Admin | Comments: 3</p>
            </div>
            <div className='card mx-3 mt-3 mb-3'>
              <h6 className='card-title px-3 mt-2 mb-0'>Some issue title</h6>
              <p className='card-body py-0 mt-1 mb-0'>#315 opened 3 days ago</p>
              <p className='card-text px-3 mt-1 mb-2'>Admin | Comments: 3</p>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-6 col-12 h-100'>
          <h3 className='text-center mb-3'>In Progress</h3>
          <div className='border bg-dark-subtle' style={{ minHeight: '100vh' }}>
            <div className='card mx-3 mt-3'>
              <h6 className='card-title px-3 mt-2 mb-0'>Some issue title</h6>
              <p className='card-body py-0 mt-1 mb-0'>#315 opened 3 days ago</p>
              <p className='card-text px-3 mt-1 mb-2'>Admin | Comments: 3</p>
            </div>
            <div className='card mx-3 mt-3'>
              <h6 className='card-title px-3 mt-2 mb-0'>Some issue title</h6>
              <p className='card-body py-0 mt-1 mb-0'>#315 opened 3 days ago</p>
              <p className='card-text px-3 mt-1 mb-2'>Admin | Comments: 3</p>
            </div>
            <div className='card mx-3 mt-3 mb-3'>
              <h6 className='card-title px-3 mt-2 mb-0'>Some issue title</h6>
              <p className='card-body py-0 mt-1 mb-0'>#315 opened 3 days ago</p>
              <p className='card-text px-3 mt-1 mb-2'>Admin | Comments: 3</p>
            </div>
          </div>
        </div>
        <div className='col-md-4 col-sm-6 col-12'>
          <h3 className='text-center mb-3'>Completed</h3>
          <div className='border bg-dark-subtle' style={{ minHeight: '100vh' }}>
            <div className='card mx-3 mt-3'>
              <h6 className='card-title px-3 mt-2 mb-0'>Some issue title</h6>
              <p className='card-body py-0 mt-1 mb-0'>#315 opened 3 days ago</p>
              <p className='card-text px-3 mt-1 mb-2'>Admin | Comments: 3</p>
            </div>
            <div className='card mx-3 mt-3'>
              <h6 className='card-title px-3 mt-2 mb-0'>Some issue title</h6>
              <p className='card-body py-0 mt-1 mb-0'>#315 opened 3 days ago</p>
              <p className='card-text px-3 mt-1 mb-2'>Admin | Comments: 3</p>
            </div>
            <div className='card mx-3 mt-3'>
              <h6 className='card-title px-3 mt-2 mb-0'>Some issue title</h6>
              <p className='card-body py-0 mt-1 mb-0'>#315 opened 3 days ago</p>
              <p className='card-text px-3 mt-1 mb-2'>Admin | Comments: 3</p>
            </div>
            <div className='card mx-3 mt-3'>
              <h6 className='card-title px-3 mt-2 mb-0'>Some issue title</h6>
              <p className='card-body py-0 mt-1 mb-0'>#315 opened 3 days ago</p>
              <p className='card-text px-3 mt-1 mb-2'>Admin | Comments: 3</p>
            </div>
            <div className='card mx-3 mt-3'>
              <h6 className='card-title px-3 mt-2 mb-0'>Some issue title</h6>
              <p className='card-body py-0 mt-1 mb-0'>#315 opened 3 days ago</p>
              <p className='card-text px-3 mt-1 mb-2'>Admin | Comments: 3</p>
            </div>
            <div className='card mx-3 mt-3'>
              <h6 className='card-title px-3 mt-2 mb-0'>Some issue title</h6>
              <p className='card-body py-0 mt-1 mb-0'>#315 opened 3 days ago</p>
              <p className='card-text px-3 mt-1 mb-2'>Admin | Comments: 3</p>
            </div>
            <div className='card mx-3 mt-3'>
              <h6 className='card-title px-3 mt-2 mb-0'>Some issue title</h6>
              <p className='card-body py-0 mt-1 mb-0'>#315 opened 3 days ago</p>
              <p className='card-text px-3 mt-1 mb-2'>Admin | Comments: 3</p>
            </div>
            <div className='card mx-3 mt-3'>
              <h6 className='card-title px-3 mt-2 mb-0'>Some issue title</h6>
              <p className='card-body py-0 mt-1 mb-0'>#315 opened 3 days ago</p>
              <p className='card-text px-3 mt-1 mb-2'>Admin | Comments: 3</p>
            </div>
            <div className='card mx-3 mt-3 mb-3'>
              <h6 className='card-title px-3 mt-2 mb-0'>Some issue title</h6>
              <p className='card-body py-0 mt-1 mb-0'>#315 opened 3 days ago</p>
              <p className='card-text px-3 mt-1 mb-2'>Admin | Comments: 3</p>
            </div>
            <div className='card mx-3 mt-3 mb-3'>
              <h6 className='card-title px-3 mt-2 mb-0'>Some issue title</h6>
              <p className='card-body py-0 mt-1 mb-0'>#315 opened 3 days ago</p>
              <p className='card-text px-3 mt-1 mb-2'>Admin | Comments: 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

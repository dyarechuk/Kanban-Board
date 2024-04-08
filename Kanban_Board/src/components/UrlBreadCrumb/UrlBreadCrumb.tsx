import { Breadcrumb } from 'react-bootstrap';

export function UrlBreadcrumb() {
  return (
    <div className='d-flex gap-4 align-items-center'>
      <Breadcrumb className='custom-breadcrumb mt-3'>
        <Breadcrumb.Item href='#'>Facebook</Breadcrumb.Item>
        <Breadcrumb.Item
          active
          href='https://getbootstrap.com/docs/4.0/components/breadcrumb/'
        >
          React
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className='d-flex gap-2 align-items-center'>
        <img
          src='./../public/star.svg'
          alt='star'
          style={{ height: '25px', width: '25px' }}
        />
        <span>194K stars</span>
      </div>
    </div>
  );
}

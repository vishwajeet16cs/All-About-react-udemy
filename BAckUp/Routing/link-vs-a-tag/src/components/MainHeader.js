import { Link } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link activeClassName={classes.active} to='/welcome'>
              Welcome
            </Link>
          </li>
          <li>
            <Link activeClassName={classes.active} to='/products'>
              Products
            </Link>
          </li>
          <li>
            {/* <a activeClassName={classes.active} href='/product'>
              hello
            </a> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
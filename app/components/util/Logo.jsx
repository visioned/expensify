import { Link } from '@remix-run/react';

function Logo() {
  return (
    <h1 id="logo">
      <Link to="/">Expensify</Link>
    </h1>
  );
}

export default Logo;
import Link from 'next/link';
import Head from 'next/head';

const Header = ({title}) => (
  <>
  <Head>
    <title>{title}</title>
  </Head>
  <header>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/post/[id]" as="/post/first">
          <a>First Post</a>
        </Link>
      </li>
      <li>
        <Link href="/post/[id]" as="/post/second">
          <a>Second Post</a>
        </Link>
      </li>
    </ul>
  </header>
  </>
)

export default Header

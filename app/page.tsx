
import Link from 'next/link'
export default function Home() {
  return (
    <center >Hello World 
    {/* <p><a href="/about">Redirect to about</a></p> */}
    <p>  <Link href="/about">Redirect Without Reload</Link></p>
    </center  >

  );
}

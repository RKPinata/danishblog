import Link from 'next/link';
import Image from 'next/image' //this was added by 

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      {/* <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" /> */} {/*remove old styling(logo)*/} 
      <div className="container w-10 h-10 rounded-full block mx-auto overflow-hidden mb-4 shadow-xl">
      <Image className="rounded-full mx-auto" src="/logo.png" height={50} width={50} />
      <div/>
      </div>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}

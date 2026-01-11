import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900'>
      <h1 className='text-8xl font-bold'>404</h1>
      <p className='text-xl mb-4'>ページが見つかりませんでした</p>
      <Link href="/" className="text-blue-500 underline">
        ホームに戻る
      </Link>
    </div>
  );
};

export default NotFound;
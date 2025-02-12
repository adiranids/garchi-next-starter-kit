import Image from 'next/image'

const steps = [
  "Provide your api key in .env",
  "Create your first page on <a className='underline text-red-500' href='https://garchi.co.uk'>Garchi CMS</a>",
  "Check out components/garchi folder for example components",
  "Check out types/garchi.d.ts for types",
  "Check out utils/garchi.ts for helper functions",
]


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-linear-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Garchi CMS starter kit
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-linear-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/garchi_logo.svg"
              alt="Garchi Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <ul className="list-disc">
          {
            steps.map((step, i) => 
            <li key={i} className="mb-4 text-lg dark:prose-invert prose prose-a:text-red-500 prose-a:underline prose-a:decoration-red-500" dangerouslySetInnerHTML={{__html: step}} />)
          }
      </ul>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="https://garchi.co.uk/documentation"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Garchi CMS features, API and usage.
          </p>
        </a>


        <a
          href="https://garchi.co.uk/signup"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Sign Up{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly sign up to Garchi CMS and start creating your content.
          </p>
        </a>

      
      </div>
    </main>
  )
}

export default function Home() {
  return (
    <div
      className={
        'flex flex-col items-center justify-center p-6 transition-colors duration-300 dark:text-white text-gray-900'
      }
    >
      <div
        className={
          'p-8 rounded-2xl shadow-lg max-w-md text-center dark:bg-gray-800 bg-white'
        }
      >
        <h1 className="text-2xl font-bold">Welcome to the Boilerplate App</h1>
        <p className="mt-4">
          This is a minimal boilerplate for a React application. Feel free to
          modify and expand it as needed.
        </p>
      </div>
    </div>
  );
}

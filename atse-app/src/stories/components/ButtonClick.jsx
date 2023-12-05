export const ButtonClick = (props) => {
// export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
// console.log(props);
    return (
      <>
      <div className="container mx-auto">
      <button
        type="button"
        className='btn-click test-123 mb-5 p-3 border-orange-400 border hover:bg-sky-700 rounded-75 hover:bg-cyan-600'
        // {...props}
      >
        {props.children}
        <img src={`./assets/images/logo.svg`} alt="test" />
        <span>text</span>
        {/* <img src={TestSvg} alt="test" /> */}
        {/* <ImageFile /> */}
        {/* <TestSvg /> */}
      </button>
      <h1 className="text-3xl font-bold underline mb-5">
    Hello worlds!
  </h1>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>

<div className="p-6 max-w-sm mb-10 mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 bg-yellow-500">
  <div className="shrink-0">
    {/* <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" /> */}
  </div>
  <div>
    <div className="text-xl font-medium text-black">ChitChat</div>
    <p className="text-slate-500">You have a new message!</p>
  </div>
</div>

<div className="grid gap-4 grid-cols-3 grid-rows-3 mb-10 text-white">
  <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">1</div>
  <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">2</div>
  <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">3</div>
  <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">4</div>
  <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">5</div>
  <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">6</div>
  <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">7</div>
  <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">8</div>
  <div className="p-4 bg-fuchsia-500 shadow-lg rounded-lg">9</div>
</div>

<div className="flex gap-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-purple rounded-lg text-center">
  <div className="flex-1 p-4 bg-purple-500 shadow-lg rounded-lg">01</div>
  <div className="contents">
    <div className="flex-1 p-4 bg-purple-500 shadow-lg rounded-lg">02</div>
    <div className="flex-1 p-4 bg-purple-500 shadow-lg rounded-lg">03</div>
  </div>
  <div className="flex-1 p-4 bg-purple-500 shadow-lg rounded-lg">04</div>
</div>

<div className="max-w-md mt-10 mb-10 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src="/assets/images/card-img-1.jpg" alt="Modern building architecture" />
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="https://google.com" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>
</div>
      </>
    );
  };


  // console.log('ButtonClick', document.querySelector('.btn-click'))
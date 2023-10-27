export const ButtonClick = (props) => {
// export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
// console.log(props);
    return (
      <button
        type="button"
        className='btn-click test-123'
        // {...props}
      >
        {props.children}
        <img src={`./assets/images/logo.svg`} alt="test" />
        {/* <img src={TestSvg} alt="test" /> */}
        {/* <ImageFile /> */}
        {/* <TestSvg /> */}
      </button>
    );
  };


  // console.log('ButtonClick', document.querySelector('.btn-click'))
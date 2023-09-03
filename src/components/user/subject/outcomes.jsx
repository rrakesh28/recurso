import { ReactComponent as IMG } from "../../../assests/undraw_educator_re_ju47.svg";
const Outcomes = (props) => {
  return (
    <div className="mt-10 w-screen lg:px-20 ">
      <div className="w-full flex justify-center">
        <p className="font-bold text-xl">Course Outcomes</p>
      </div>
      <div className="mt-4 mx-10 lg:flex lg:flex-row-reverse items-center gap-8">
        <div className="w-screen lg:w-[30rem] flex justify-center">
          <IMG className="w-[20rem] h-[20rem]" />
        </div>
        <div className="ml-10">
          <p dangerouslySetInnerHTML={{ __html: props.outcomes }}></p>
        </div>
      </div>
    </div>
  );
};

export default Outcomes;

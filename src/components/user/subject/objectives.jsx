import { ReactComponent as IMG } from "../../../assests/undraw_education_f8ru.svg";
const Objectives = (props) => {
  return (
    <div className="mt-10 w-screen lg:px-20">
      <div className="w-full flex justify-center">
        <p className="font-bold text-xl">Course Objectives</p>
      </div>
      <div className="mt-4 mx-10 lg:flex items-center gap-8">
        <div className="w-screen lg:w-[30rem] flex justify-center">
          <IMG className="w-[20rem] h-[20rem]" />
        </div>
        <div>
          <p dangerouslySetInnerHTML={{ __html: props.objectives }}></p>
        </div>
      </div>
    </div>
  );
};

export default Objectives;

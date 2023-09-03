import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <p className="text-2xl font-extrabold">SIGNUP</p>
      </div>

      <div className="flex flex-col items-center mt-10">
        <div className="flex items-center border-black border-2 px-10 py-1 rounded-3xl">
          <img className="h-8 w-8" alt="google logo" src="https://firebasestorage.googleapis.com/v0/b/recusro.appspot.com/o/logos%2Fgoogle_logo.svg?alt=media&token=78c77e51-dc7a-4720-a0cd-99ca157188d4"/>
          <p className="font-bold">LOGIN WITH GOOGLE</p>
        </div>

        <div className="flex items-center border-black border-2 px-12 py-1 rounded-3xl mt-3">
          <img className="h-8 w-8" alt="apple logo" src="https://firebasestorage.googleapis.com/v0/b/recusro.appspot.com/o/logos%2Fapple_logo.svg?alt=media&token=9cee4e5f-1f78-494c-92f3-98079b633f76" />
          <p className="font-bold">LOGIN WITH APPLE</p>
        </div>

        <div className="flex items-center border-black border-2 px-8 py-1 rounded-3xl mt-3">
          <img className="h-8 w-8" alt="apple logo" src="https://firebasestorage.googleapis.com/v0/b/recusro.appspot.com/o/logos%2Ffacebook_logo.svg?alt=media&token=f329136f-1b97-4656-a66a-0acb2b9cdd23" />
          <p className="font-bold">LOGIN WITH FACEBOOK</p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 px-5">
        <p>Already have an account?<Link to={"/Login"} className="text-blue-600 font-bold"> Login</Link></p>

        <p className="flex justify-center mt-10">By creating you accept the Recurso Terms and conditions</p>
      </div>
    </div>
  );
};

export default Signup;



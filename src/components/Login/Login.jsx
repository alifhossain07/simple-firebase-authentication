import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {

        console.log("Google mama Is Coming");
    };

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="bg-sky-500 p-4 rounded-xl text-white font-semibold hover:bg-sky-300 duration-200">Google Login</button>
        </div>
    );
};

export default Login;
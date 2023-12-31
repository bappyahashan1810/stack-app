import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="44"
            viewBox="0 0 51 44"
            fill="none"
          >
            <g clipPath="url(#clip0_301_13152)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50.4409 25.3835L48.5223 22.7586H49.7083C50.0269 22.7582 50.3199 22.6066 50.4725 22.3633C50.625 22.12 50.6129 21.8236 50.4409 21.5903L39.3393 6.41794C39.1809 6.19923 38.9039 6.06725 38.6068 6.06897H11.9734C11.6763 6.06725 11.3992 6.19923 11.2409 6.41794L0.139303 21.5903C-0.0327482 21.8236 -0.044862 22.12 0.107706 22.3633C0.260275 22.6066 0.553238 22.7582 0.87185 22.7586H2.05788L0.139303 25.3835C-0.0327482 25.6167 -0.044862 25.9131 0.107706 26.1564C0.260275 26.3997 0.553238 26.5513 0.87185 26.5517H2.05788L0.139303 29.1766C-0.0327482 29.4098 -0.044862 29.7062 0.107706 29.9495C0.260275 30.1928 0.553238 30.3444 0.87185 30.3448H2.05788L0.139303 32.9697C-0.0327482 33.2029 -0.044862 33.4993 0.107706 33.7426C0.260275 33.9859 0.553238 34.1375 0.87185 34.1379H2.05788L0.139303 36.7628C-0.0327482 36.996 -0.044862 37.2924 0.107706 37.5357C0.260275 37.779 0.553238 37.9306 0.87185 37.931H49.7083C50.0269 37.9306 50.3199 37.779 50.4725 37.5357C50.625 37.2924 50.6129 36.996 50.4409 36.7628L48.5223 34.1379H49.7083C50.0269 34.1375 50.3199 33.9859 50.4725 33.7426C50.625 33.4993 50.6129 33.2029 50.4409 32.9697L48.5223 30.3448H49.7083C50.0269 30.3444 50.3199 30.1928 50.4725 29.9495C50.625 29.7062 50.6129 29.4098 50.4409 29.1766L48.5223 26.5517H49.7083C50.0269 26.5513 50.3199 26.3997 50.4725 26.1564C50.625 25.9131 50.6129 25.6167 50.4409 25.3835Z"
                fill="#9E7AF4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.985 11.8072C11.6671 11.8068 11.3746 11.656 11.2216 11.4136C11.0686 11.1711 11.0795 10.8754 11.2499 10.6419L12.6731 8.69607C12.8333 8.47721 13.1109 8.34473 13.4091 8.34483H17.4416C17.9233 8.34483 18.3137 8.68448 18.3137 9.10345C18.3137 9.52243 17.9233 9.86207 17.4416 9.86207H13.8879L12.7219 11.4552C12.5618 11.6746 12.2838 11.8074 11.985 11.8072Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M49.7083 26.5517H0.87185C0.553238 26.5513 0.260275 26.3997 0.107706 26.1564C-0.044862 25.9131 -0.0327482 25.6167 0.139303 25.3835L2.05788 22.7586H48.5223L50.4409 25.3835C50.6129 25.6167 50.625 25.9131 50.4725 26.1564C50.3199 26.3997 50.0269 26.5513 49.7083 26.5517Z"
                fill="#7F56E0"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M49.7083 30.3448H0.87185C0.553238 30.3444 0.260275 30.1928 0.107706 29.9495C-0.044862 29.7062 -0.0327482 29.4098 0.139303 29.1766L2.05788 26.5517H48.5223L50.4409 29.1766C50.6129 29.4098 50.625 29.7062 50.4725 29.9495C50.3199 30.1928 50.0269 30.3444 49.7083 30.3448Z"
                fill="#6941C6"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M49.7083 34.1379H0.87185C0.553238 34.1375 0.260275 33.9859 0.107706 33.7426C-0.044862 33.4993 -0.0327482 33.2029 0.139303 32.9696L2.05788 30.3448H48.5223L50.4409 32.9696C50.6129 33.2029 50.625 33.4993 50.4725 33.7426C50.3199 33.9859 50.0269 34.1375 49.7083 34.1379Z"
                fill="#8056E0"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M49.7083 37.931H0.87185C0.553238 37.9306 0.260275 37.779 0.107706 37.5357C-0.044862 37.2924 -0.0327482 36.996 0.139303 36.7628L2.05788 34.1379H48.5223L50.4409 36.7628C50.6129 36.996 50.625 37.2924 50.4725 37.5357C50.3199 37.779 50.0269 37.9306 49.7083 37.931Z"
                fill="#6941C6"
              />
            </g>
            <defs>
              <clipPath id="clip0_301_13152">
                <rect width="50.5806" height="44" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h2 className="text-[#4E5D78] font-bold text-3xl">Stack</h2>
        </div>
        <h5 className="text-[#404040] text-xl font-semibold">
          Sign In to continue with Stack
        </h5>
        <div className="mt-[52px]">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Email</span>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="input input-bordered input-primary w-full max-w-xs"
              required
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">Password</span>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="input input-bordered input-primary w-full max-w-xs"
              required
            />
          </label>
        </div>
        <input
          className="btn-sm w-full bg-primary text-white rounded-md p-1 mt-6 uppercase"
          type="submit"
          value="sign in"
        />
        <h5 className="mt-6">
          <span className="text-[#B0B7C3]"> Don't have an account?</span>
          <Link className="text-[#377DFF]" to="/signup">
            Sign Up
          </Link>
        </h5>
      </form>
    </div>
  );
};

export default SignIn;

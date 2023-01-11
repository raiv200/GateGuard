import Link from "next/link";
import React from "react";

const Logo = ({size}) => {
  return (
    <div>
      <Link href="/">
        <a className="decoration-none">
          <div className="flex items-center space-x-2">
            <img className={`${size === 'L' ? 'w-12' : size === 'M' ? 'w-8':'w-6'}`} src="/gateguard-logo.svg" />
            <p className={`${size === 'L' ? 'text-[28px]' : size === 'M' ? 'text-[23px]' :'text-[`18px]'} pt-1 font-bold font-inter text-indigo-500 dark:text-indigo-300`}>
              GateGuard
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Logo;

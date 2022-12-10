/* eslint-disable max-len */
import React, { memo } from 'react';

type Props = {
  loading?: boolean;
  children: any;
  onClick?: any;
  appearance?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};

// Different button styles can be added here
const appearances = {
  Primary:
    'flex active:scale-95 text-sm transition ease-in-out duration-300 bg-primary text-white font-semibold px-4 py-3 w-full rounded-lg text-center items-center justify-center',
  PrimarySmall:
    'flex active:scale-95 md:text-sm text-xs transition ease-in-out duration-300 bg-primary text-white h-fit px-3 py-2.5 w-full rounded-lg text-center items-center justify-center',
  Green:
    'flex active:scale-95 text-sm transition ease-in-out duration-300 bg-green-400 bg-opacity-75 text-white font-semibold px-4 py-3 w-full rounded-lg text-center items-center justify-center',
  Whatsapp:
    'flex active:scale-95 text-sm transition ease-in-out duration-300 bg-gray-850 text-white font-semibold px-4 py-3 w-full rounded-lg text-center items-center justify-center',
  WhatsappOutlined:
    'flex active:scale-95 text-sm transition ease-in-out duration-300 bg-whatsapp bg-opacity-10 border border-whatsapp text-whatsapp font-medium px-4 py-3 w-full rounded-lg text-center items-center justify-center',
  Gold: 'flex active:scale-95 transition ease-in-out duration-300 bg-yellow-600 text-white font-semibold px-3 py-1 w-full rounded-lg text-center items-center justify-center',
  Dark: 'flex active:scale-95 text-sm text-sm transition ease-in-out duration-300 font-semibold py-2.5 w-full px-2.5 text-white bg-black rounded-lg items-center justify-center',
  White:
    'flex active:scale-d disabled:cursor-not-allowed transition text-sm text-sm ease-in-out duration-300 font-semibold py-2.5 w-full px-2.5 text-neutral-900 bg-white rounded-lg items-center justify-center',
  Ghost:
    'text-center relative py-2.5 min-w-18 px-5 text-sm font-medium text-neutral-900 bg-white rounded-lg border border-gray-900 hover:bg-gray-50 cursor-pointer hover:text-neutral-800 focus:z-10 focus:ring-1 focus:outline-none focus:ring-indigo-200 focus:scale-95 transition duration-300 inline-flex items-center justify-center',
  GhostPrimary:
    'text-center relative py-2.5 min-w-18 px-5 text-sm font-medium text-neutral-900 bg-white rounded-lg border-2 border-primary hover:bg-gray-50 cursor-pointer hover:text-neutral-800 focus:z-10 focus:ring-1 focus:outline-none focus:ring-indigo-200 focus:scale-95 transition duration-300 inline-flex items-center justify-center',
  PrimaryOutlined: 'flex active:scale-95 transition ease-in-out duration-300 text-primary border border-primary bg-opacity-75 bg-blue-50 font-semibold px-4 py-3 w-full rounded-lg text-center items-center justify-center',
  Default:
    'text-center relative py-3 min-w-18 px-5 text-sm font-medium text-neutral-900 bg-gray-200 opacity-70 rounded-lg hover:bg-gray-200 hover:opacity-100 cursor-pointer hover:text-neutral-800 focus:z-10 focus:outline-none focus:scale-95 transition duration-300 inline-flex items-center justify-center',
  DefaultLite:
    'text-center relative py-3 min-w-18 px-5 text-sm font-medium text-neutral-500 bg-gray-100 opacity-70 rounded-lg hover:bg-gray-200 hover:opacity-100 cursor-pointer hover:text-neutral-800 focus:z-10 focus:ring-1 focus:outline-none focus:ring-indigo-200 focus:scale-95 transition duration-300 inline-flex items-center justify-center',
};

const Button = ({
  loading,
  disabled = false,
  children,
  onClick,
  appearance = 'Default',
  width = '',
  height = '',
  type = 'button',
}: Props) => (
  <button
    disabled={loading || disabled}
    type={type || "button"}
    onClick={onClick}
    className={
        disabled
          ? ' ' + appearances[appearance] + ' opacity-50 ' + width + ' ' + height
          : ' ' + appearances[appearance] + ' ' + width + ' ' + height
      }
  >
    {loading && (
    <div className="w-4 h-4 rounded-full my-1 border-2 border-y-white border-l-white border-r-gray-400 animate-spin" />
    )}
    {!loading && <div>{children}</div>}
  </button>
);

export default memo(Button);
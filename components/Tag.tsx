import React from "react";

interface TextProps {
  text: String;
}
const Tag = ({ text }: TextProps) => {
  return (
    <span className="inline-block bg-gray-200 px-2 py-1 rounded-lg text-sm font-medium text-gray-800 mr-2 mb-2">
      {text}
    </span>
  );
};

export default Tag;

import React from "react"

const Button = ({
 title = "button",
}) => {
  return (
    <button class="bg-blue-700 text-white font-semibold py-1 px-4 rounded">
      {title}
    </button>
  )
}

export default Button

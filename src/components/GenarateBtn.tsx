import React from 'react'

function GenarateBtn() {
  return (
    <button
    onClick={handleClick}
    className={`${
      imageUrl && theme ? "" : "cursor-not-allowed"
    } p-5 w-full bg-blue-700 text-white rounded-lg hover:opacity-90 active:scale-[.98] transition`}>
    Generate Room
  </button>
  )
}

export default GenarateBtn
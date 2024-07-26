import { useImage, useOutput, useRoom, useTheme } from '@/store/useStore';
import React from 'react'

function GenarateBtn() {

  const imageUrl = useImage((state: any) => state.imageUrl);
  const theme = useTheme((state: any) => state.theme);
  const room = useRoom((state: any) => state.room);
  const setOutput = useOutput((state: any) => state.setOutput);
  const setLoading = setLoading((state: any) => state.setLoading);
  const setGenerating = setLoading((state: any) => state.setGenerating);
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
import React from "react";

const ColorPalette = ({paletteName}) => {
  return <>
    {
      [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(weight => {
        return <span className={`bg-${paletteName}-${weight} p-4`}>
          {paletteName}-{weight}
        </span>
      })
    }
  </>
}

const Colors = () => (
  <div className='grid grid-cols-10'>
    {
      ['blue', 'green', 'yellow', 'red', 'gray'].map(paletteName => {
        return <ColorPalette paletteName={paletteName}/>
      })
    }
  </div>
);

export default Colors;
